import Typography from "@/ui/typography/Typography";
import ChevroneLeftIcon from "@/ui/icons/ChevroneLeftIcon";
import ChevroneRightIcon from "@/ui/icons/ChevroneRightIcon";

export default function Paginator({
  total,
  activePage,
  setActivePage,
}: {
  total: number;
  activePage: number;
  setActivePage: (page: number) => void;
}) {
  return (
    <div className="flex justify-between space-x-4 mt-10 items-center w-full">
      <div className="flex items-center space-x-2">
        <button
          className={activePage === 1 ? 'cursor-not-allowed' : ''}
          onClick={() => setActivePage(activePage - 1)}
        >
          <ChevroneLeftIcon/>
        </button>
        <Typography text={activePage.toString()} type={'sub1'} className="border px-4 rounded-md"/>
        <button
          className={activePage === total ? 'cursor-not-allowed' : ''}
          onClick={() => setActivePage(activePage + 1)}
        >
          <ChevroneRightIcon/>
        </button>
      </div>
      <Typography text={`Total ${total} items`} type={'labelsMedium'}/>
    </div>
  );
}
