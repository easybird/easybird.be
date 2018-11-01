import React from 'react';

export const onRenderBody = (
  {setHeadComponents, setHtmlAttributes, setBodyAttributes},
  pluginOptions
) => {
  // head scripts for google adsense
  if (process.env.NODE_ENV === 'production') {
    setHeadComponents ([
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>,
      <script
      dangerouslySetInnerHTML={{
          __html: `
          (adsbygoogle = window.adsbygoogle || []).push ({
            google_ad_client: 'ca-pub-4759680589814180',
            enable_page_level_ads: true,
          })
          `
      }}
      />,
    ]);
  }
};
