import { NextApiRequest, NextApiResponse } from 'next';
import { CLIENT_ID } from '@/utils/auth/server';
import { getAbsoluteUrl } from '@/utils/get-absolute-url';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { locale } = req.query as {
    locale?: string;
  };

  const url ='https://discord.com/oauth2/authorize?client_id=1121643516158824508&permissions=8&scope=bot%20applications.commands' +
    new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: `${getAbsoluteUrl()}/api/auth/callback`,
      response_type: 'code',
      scope: 'identify guilds',
      state: locale ?? '',
    });

  res.redirect(302, url);
}
