'use client';
import { supabase } from '@/utils/conections/supabase';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditSponsor() {
  const { id } = useParams();
  const router = useRouter();
  const session = useSession();

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState('');
  const [fileOld, setFileOld] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget_start, setBudget_start] = useState('');
  const [budget_end, setbudget_end] = useState('');
  const [event_capacity_minimum, setEvent_capacity_minimum] = useState('');

  const getSingleData = async () => {
    const { data } = await supabase
      .from('tbl_sponsor')
      .select()
      .eq('id', id)
      .single();

    setTitle(data?.title);
    setDescription(data?.description);
    setBudget_start(data?.budget_start);
    setbudget_end(data?.budget_end);
    setEvent_capacity_minimum(data?.event_capacity_minimum);
    setFileOld(data?.picture);
  };

  useEffect(() => {
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
      const res = await supabase.from('tbl_sponsor').update({
        title,
        description,
        budget_start,
        budget_end,
        event_capacity_minimum,
        user_id: session?.data?.user?.id,
        picture: url,
        is_show: true,
      }).eq('id',id);
      console.log('sponsor res : ', res);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setTitle('');
    setDescription('');
    setBudget_start('');
    setbudget_end('');
    setEvent_capacity_minimum('');
    router.replace('/dashboard/user/sponsor');
  };
  return (
    <div className="w-full flex flex-col md:mt-2">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-start p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className="text-xl font-bold">sponsor</h4>
          <p className="text-sm mt-2">Edit sponsor</p>
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
              <Link href="/dashboard/user/sponsor/">Sponsor</Link>
            </li>
            <li>
              <a>Detail</a>
            </li>
            <li>{id}</li>
          </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={`w-full ${loading && 'animate-pulse'}`}>
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
            Nama Sponsor
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              min={1}
              name="budget_start"
              id="budget_start"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
              placeholder=" "
              required
              value={budget_start}
              onChange={(e) => setBudget_start(e.target.value)}
            />
            <label
              for="budget_start"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Budget Start (Rupiah)
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="budget_end"
              id="budget_end"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
              placeholder=" "
              required
              value={budget_end}
              onChange={(e) => setbudget_end(e.target.value)}
            />
            <label
              for="budget_end"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Budget End (Rupiah)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
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
              Upload Banner Sponsor
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              min={100}
              name="capacity"
              id="capacity"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
              placeholder=" "
              required
              value={event_capacity_minimum}
              onChange={(e) => setEvent_capacity_minimum(e.target.value)}
            />
            <label
              for="capacity"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Kapasistas
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
        <button
          type="submit"
          className="text-white bg-fuchsia-700 hover:bg-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            'Edit Sponsor'
          )}
        </button>
      </form>
    </div>
  );
}
