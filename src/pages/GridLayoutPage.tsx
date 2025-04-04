import GridLayout from "@/components/gridLayout/GridLayout";

import HomeSidebar from "@/components/homeSidebar/HomeSidebar";

const GridLayoutPage = () => {
  return (
    <div className='flex'>
      <HomeSidebar />
      <GridLayout />
    </div>
  );
};

export default GridLayoutPage;
