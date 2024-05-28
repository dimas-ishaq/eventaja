'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import blogs from '../../../utils/blogs';
import { FiExternalLink } from 'react-icons/fi';
import { SiLinkedin, SiInstagram } from 'react-icons/si';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share';

const BlogPath = () => {
  const { blog_path } = useParams();
  const [blog, setBlog] = useState({});
  const url = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    const current_blog = blogs.find((blog) => blog.path === blog_path);
    setBlog(current_blog);
  }, [blog_path]);

  return (
    <div className=" bg-white parent">
      <h1 className="py-12 text-3xl font-bold text-center">{blog.title}</h1>
      <div className="text-center">
        {blog.img && (
          <div className="flex justify-center items-center">
            <Image
              src={blog?.img}
              alt="Blog Main Image"
              width={700}
              height={400}
              className="main_blog_image rounded-lg"
            />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between mt-10 mb-4">
        <span>
          <strong className="text-violet-900">Event Aja</strong>
        </span>
        <span>
          <strong className="text-violet-900">{blog.date}</strong>
        </span>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-3">
          {blog?.description?.split('\n')?.map((s, i) => (
            <React.Fragment key={i + 1}>
              <p className="text-justify text-gray">{s}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="px-4 py-6 rounded border-black border-[1px] md:col-span-2 lg:col-span-1">
          <div>
            <h4 className="mb-3 text-lg font-medium">Lainnya:</h4>
            <p className="flex items-center gap-3">
              <span>
                <SiInstagram />
              </span>
              <a
                href={blog.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <span>Instagram</span> <FiExternalLink />
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span>
                <SiLinkedin />
              </span>
              <a
                href={blog.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <span>LinkedIn</span> <FiExternalLink />
              </a>
            </p>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="mb-3 text-lg font-medium">Bagikan: </h4>
          <div className="flex flex-wrap items-center gap-4">
            <EmailShareButton url={url} title="Event Aja -">
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton url={url} title="Event Aja -">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title="Event Aja -">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title="Event Aja -">
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title="Event Aja -">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="mb-3 text-lg font-medium">Tag: </h4>
          <div>
            {blog?.tags?.map((tag) => (
              <button
                key={tag}
                className="px-2 py-0 m-1 bg-gray-500 rounded text-violet-900 bg-opacity-20"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPath;
