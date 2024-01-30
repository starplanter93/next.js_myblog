'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

interface Ownprops {
  content: string;
}

export default function MarkDownViewer({ content }: Ownprops) {
  return (
    <ReactMarkdown
      className='prose max-w-none'
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { ref, children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag='div'
              {...rest}
              style={materialDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        pre({ node, children, style, ...props }) {
          return (
            <pre {...props} style={{ ...style, backgroundColor: '#2f2f2f' }}>
              {children}
            </pre>
          );
        },
        img(image) {
          return (
            <Image
              className='w-full max-h-60 object-cover'
              src={image.src || ''}
              alt={image.alt || ''}
              width={500}
              height={350}
            />
          );
        }
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
