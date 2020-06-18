import React, { useEffect, useState, useRef } from "react";

// Utils
import { retrieve } from "utils/axios";
import { CopyToClipboard } from "components/CopyToClipboard";
import { TableRow } from "components/TableRow";

const Urls = () => {
  let mounted = true;
  const short_link_ref = useRef(null);
  const [urls, setUrls] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    (async() => {
      let res = await retrieve("/urls");
      if (mounted) {
        setUrls(res.data.urls);
      }
      setFetching(false);
    })();

    return () => {
      mounted = false;
    }
  }, [])

  return (
    <main>
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
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody>
                  {urls && urls.length && urls.map((url: { [key: string]: any }) => <TableRow key={url.id} url={url} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Urls };