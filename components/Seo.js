import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const Seo = ({ title, description, summary }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='og:title' property='og:title' content={title} />
      <meta
        name='og:description'
        property='og:description'
        content={description}
      />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content={summary} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
    </Head>
  );
};

Seo.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  summary: PropTypes.string,
};

export default Seo;
