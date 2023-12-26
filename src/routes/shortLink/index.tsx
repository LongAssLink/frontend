import { useEffect, useState } from 'react';
import { Link, useParams } from 'wouter';

import api, { ApiResponses } from '@/lib/api';

export default function ShortLinkPage() {
  const params = useParams();
  const [linkData, setLinkData] = useState<ApiResponses<'api/link'>>();

  useEffect(() => {
    const slug = params.slug;
    api
      .get(`api/link/${slug}`)
      .json<ApiResponses<'api/link'>>()
      .then(setLinkData)
      .catch(() => setLinkData(undefined));

    return () => setLinkData(undefined);
  }, [params.slug]);

  useEffect(() => {
    let dest = '/';
    if (linkData) {
      dest = linkData.data?.dest ?? dest;
      if (dest.length > 2 && !dest.startsWith('http')) {
        dest = 'http://' + dest;
      }
    }
    const timer = setTimeout(() => {
      window.open(dest, '_self');

      clearTimeout(timer);
    }, 500);

    return () => clearTimeout(timer);
  }, [linkData]);

  if (!linkData) {
    return (
      <div className='flex flex-col min-h-[60vh] items-center justify-center gap-5'>
        <h1 className='text-xl'>Hmm, that Link doesn&apos;t seem to exist!</h1>
        <p>
          Redirecting you to the <Link to='/'>home page</Link>...
        </p>
      </div>
    );
  }

  return (
    <div className='flex flex-col min-h-[60vh] items-center justify-center gap-5'>
      <h1 className='text-xl'>Taking you to your destination...</h1>
    </div>
  );
}
