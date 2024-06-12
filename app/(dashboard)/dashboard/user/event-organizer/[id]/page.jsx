'use client';

import { supabase } from '@/utils/conections/supabase';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function EventOrganizerInput() {
  const { id } = useParams();
  const router = useRouter();
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState('');
  const [fileOld, setFileOld] = useState('');

  const [description, setDescription] = useState('');
  const [support, setSupport] = useState('');
  const [policy, setPolicy] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [service_type, setService_type] = useState('');
  const [eo_type, setEo_type] = useState([]);
  const getServicesType = async () => {
    const res = await supabase.from('tbl_eo_type').select('*');
    console.log({ res });
    setEo_type(res.data);
  };
  const getSingleData = async () => {
    const { data } = await supabase
      .from('tbl_eo')
      .select()
      .eq('id', id)
      .single();

    setDescription(data?.description);
    setSupport(data?.support);
    setPolicy(data?.cooperation_policy);
    setTitle(data?.title);
    setPrice(data?.price);
    setService_type(data?.service_type);
    setFileOld(data?.picture);
  };
  useEffect(() => {
    getServicesType();
    getSingleData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let url = fileOld;
      if (file !== '') {
        const data = await supabase.storage
          .from('sponsor')
          .upload(`${file.name}`, file);
        url = data?.data?.fullPath;
      }

      console.log({ url });
      const res = await supabase
        .from('tbl_eo')
        .update({
          title,
          description,
          support,
          cooperation_policy: policy,
          price,
          service_type,
          user_id: session?.data?.user?.id,
          picture: url,
          is_show: true,
        })
        .eq('id', id);

        console.log('res eo : ',{res});
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setDescription();
    setSupport();
    setPolicy();
    setTitle();
    setPrice();
    setService_type();
    router.replace('/dashboard/user/event-organizer/');
  };

  return (
    <div className="w-full flex flex-col md:mt-2">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-start p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className="text-xl font-bold">Event Organizer</h4>
          <p className="text-sm mt-2">Edit Event Organizer</p>
        </div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>User</a>
            </li>
            <li>
              <Link href="/dashboard/user/event-organizer/">
                Event Organizer
              </Link>
            </li>
            <li>
              <a>Edit</a>
            </li>
            <li>{id}</li>
          </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={loading && 'animate-pulse'}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
            placeholder=" "
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label
            for="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-fuchsia-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Judul Layanan
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="price"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
            placeholder=" "
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label
            for="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-fuchsia-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Harga Mulai
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <select
              value={service_type}
              onChange={(e) => setService_type(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
            >
              <option disabled selected>
                Pilih layanan Anda
              </option>
              {eo_type?.map((item, index) => (
                <option key={index}>{item?.services_type}</option>
              ))}
            </select>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="file"
              name="banner"
              id="banner"
              className="block cursor-pointer  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
              placeholder=" "
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              for="banner"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Upload Banner Event Organizer
            </label>
          </div>
        </div>
        <div className=" relative z-0 w-full mb-5 group">
          <label for="description" className="text-sm font-medium">
            Deskripsi
          </label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            className="mt-2.5"
          />
        </div>
        <div className=" relative z-0 w-full mb-5 group">
          <label for="support" className="text-sm font-medium">
            Dukungan
          </label>
          <ReactQuill
            theme="snow"
            value={support}
            onChange={setSupport}
            className="mt-2.5"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label for="policy" className="text-sm font-medium">
            Kebijakan Kerjasama
          </label>
          <ReactQuill
            theme="snow"
            value={policy}
            onChange={setPolicy}
            className="mt-2.5"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-fuchsia-700 hover:bg-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            'Edit Layanan'
          )}
        </button>
      </form>
    </div>
  );
}
