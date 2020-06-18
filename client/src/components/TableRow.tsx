import React, { useRef } from "react";
import { CopyToClipboard } from "./CopyToClipboard";
import { format } from "date-fns";

type TableRowProps = {
  url: any;
};

const TableRow: React.FC<TableRowProps> = ({ url }) => {
  const ref = useRef(null);
  const { id, external_link, short_link, created_at, total_visits } = url;

  function formatDate(date: string) {
    return format(new Date(date), "MM/dd/yyyy")
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        {id}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {formatDate(created_at)}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        <input ref={ref} type="text" readOnly className="copyable focus:outline-none select-none w-full" defaultValue={short_link} />
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {external_link}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {total_visits}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        <CopyToClipboard buttonText="Copy to clipboard" textRef={ref} />
      </td>
    </tr>
  );
};

export { TableRow };