import React from "react";
import { Link } from "react-router-dom";

const NavBreadcrumb = ({ page, title, titlePage }) => {
  return (
    <>
      {title ? (
        <div className="w-full bg-white">
          <nav className="w-full rounded-md container mx-auto">
            <ol className="list-reset flex">
              <li>
                <Link to="/" className="text-bgbtn text-[18px] font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2 text-bgbtn text-[18px] font-semibold">
                  /
                </span>
              </li>
              <li className="text-bgbtn text-[18px] font-semibold">{page}</li>
              <li>
                <span className="mx-2 text-bgbtn text-[18px] font-semibold">
                  /
                </span>
              </li>
              <li className="text-bgbtnHome text-[16px]">{titlePage}</li>
            </ol>
          </nav>
        </div>
      ) : (
        <div className="w-full bg-white">
          <nav className="w-full rounded-md container mx-auto">
            <ol className="list-reset flex">
              <li>
                <Link to="/" className="text-bgbtn text-[18px] font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2 text-bgbtn text-[18px] font-semibold">
                  /
                </span>
              </li>
              <li className="text-bgbtnHome text-[18px]">{page}</li>
            </ol>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBreadcrumb;
