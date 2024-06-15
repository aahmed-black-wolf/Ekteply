import React from 'react';

import Markdown from 'react-markdown';

import { TermsProps } from '../@types/Terms';
import Logo from '../Common/Layout/Logo';

export default function Terms({ content }: TermsProps) {
  return (
    <div className="container  mx-auto py-[60px] px-4">
      <div className="fixed bottom-3 bg-light-900 md:top-5 left-5">
        <Logo scrollStatus />
      </div>
      <Markdown className="prose">{content}</Markdown>
    </div>
  );
}
