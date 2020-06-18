import React, { useEffect, useState, useRef } from "react";

// Utils
import { retrieve, send } from "utils/axios";
import { TableRow } from "components/TableRow";
import { useForm } from "react-hook-form";
import { CopyToClipboard } from "components/CopyToClipboard";

const Urls = () => {
  let mounted = true;
  const short_link_ref = useRef(null);
  const [urls, setUrls] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newShortLinkModal, setNewShortLinkModal] = useState(false);
  const [newShortLink, setNewShortLink] = useState("");
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  useEffect(() => {
    fetchUrls()
    return () => {
      mounted = false;
    }
  }, [])

  async function fetchUrls() {
    setFetching(true);
    let res = await retrieve("/urls");
    if (mounted) {
      setUrls(res.data.urls);
    }
    setFetching(false);
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleNewShortLinkModal() {
    setNewShortLinkModal(!newShortLinkModal);
  }

  async function createShortLink(data: any) {
    try {
      let res = await send("/urls/create", data);
      setNewShortLink(res.data.short_link)
      toggleModal()
      toggleNewShortLinkModal()
    } catch (err) {
      console.log(err);
    }
  }

  function closeNewShortLinkModal() {
    fetchUrls()
    toggleNewShortLinkModal()
  }

  return (
    <main>
      <div className="my-5 max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-row-reverse">
        <span className="inline-flex rounded-md shadow-sm">
          <button onClick={toggleModal} type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
            New Shortlink
          </button>
        </span>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Created On
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      URL
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      External URL
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Total Visits
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody>
                  {fetching && (
                    <tr>
                      <td colSpan={50} className="py-5">
                        <p className="w-full text-center">Fetching Shortlinks</p>
                      </td>
                    </tr>
                  )}
                  {!fetching && urls.length > 0 ? urls.map((url: { [key: string]: any }) => <TableRow key={url.id} url={url} />) : (
                    <tr>
                      <td colSpan={50} className="py-5">
                        <p className="w-full text-center">No urls yet, create one</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {newShortLinkModal && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  Shortlink Created
                </h3>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500 text-center w-full text-center">
                    <input ref={short_link_ref} type="text" readOnly className="copyable focus:outline-none select-none w-full text-center" defaultValue={newShortLink} />
                  </p>
                </div>
                <div className="mt-2">
                  <CopyToClipboard buttonText="Copy to clipboard" textRef={short_link_ref} />
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <span className="flex w-full rounded-md shadow-sm">
                <button onClick={closeNewShortLinkModal} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div onClick={toggleModal} className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="relative bg-white rounded-lg px-4 pt-5 pb-2 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button onClick={toggleModal} type="button" className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150" aria-label="Close">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit(createShortLink)} className="w-full py-5">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    New Shortlink
                  </h3>
                  <div className="mt-2">
                    <div>
                        <label htmlFor="external_link" className="sr-only">URL
                        </label>
                        <div className="relative rounded-md shadow-sm w-full">
                          <input ref={register({ required: true })} required name="external_link" id="external_link" type="text" className="form-input block w-full sm:text-sm sm:leading-5" placeholder="https://example.com" />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button type="submit" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                    Create Shortlink
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export { Urls };