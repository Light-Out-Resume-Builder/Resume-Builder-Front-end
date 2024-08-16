import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { dashboarddata } from "../../data/SiteData";
import IconButton from "../../components/Button/IconButton";
import { MdEdit, MdContentCopy  } from "react-icons/md";
import { ImBin } from "react-icons/im";




function Dashboard() {
  return (
    <DashboardLayout>
      <div className=" w-full bg-[#BFDBFE] pb-[150px]">
        <div className="w-full max-w-[1600px] mx-auto">
        <div className="pt-[52px] text-black  px-5 md:px-10 lg:px-[125px]">
          <h2 className=" text-3xl md:text-[40px]">Resume / cover Letter </h2>
          <p>Create, edit, and mange your resumes and cover letters</p>
        </div>
        <div className="flex flex-col gap-[50px]">
          {dashboarddata.map((data, index) => (
            <div
              key={index}
              className={`pt-10 md:pt-[50px] lg:pt-[86px] ${
                index !== 0 ? " border-[#7F7F7F] border-t-[0.5px]" : ""
              } `}
            >
              <div className="px-5 md:px-10  lg:px-[125px]">
                <div>
                  <h3 className="font-semibold text-2xl leading-[29px] pb-1">
                    {data.title}
                  </h3>
                  <p className="pb-4">{data.lastUpdate}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-[30px]">
                  <div>
                    <img
                      src={data.img}
                      alt="Resume/Cover letter"
                      className="h-[349px]"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                      <IconButton
                        backgroundColor={"white"}
                        text={"Edit"}
                        width={["140px"]}
                        icon={MdEdit}
                        height={"31px"}
                      />
                      <IconButton
                        // backgroundColor={"white"}
                        text={"Duplicate"}
                        width={["140px"]}
                        icon={MdContentCopy}
                        height={"31px"}
                      />
                      <IconButton
                        // backgroundColor={"white"}
                        text={"Delete"}
                        width={["140px"]}
                        icon={ImBin}
                        height={"31px"}
                      />
                    </div>
                    <div>
                    <IconButton
                        // backgroundColor={"white"}
                        text={"Download"}
                        width={["140px"]}
                        icon={ImBin}
                        height={"31px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
