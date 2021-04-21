import { NavLink } from "react-router-dom";

type Tab = {
  name: string;
  to: string;
};

export const Tabs = ({
  tabList,
  className = "",
}: {
  tabList: Tab[];
  className: string;
}) => {
  return (
    <ul className='flex inline-flex'>
      {tabList.map((tab) => (
        <li>
          <NavLink className={className} to={tab.to}>{tab.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};
