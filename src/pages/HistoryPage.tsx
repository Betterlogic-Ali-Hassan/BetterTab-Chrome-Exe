import TabsArea from "@/components/hero/TabsArea";

import MainLayout from "./layout/MainLayout";

export default function HistoryPage() {
  return (
    <MainLayout className='no-scrollbar'>
      <>
        <div className='w-[260px]'></div>
        <TabsArea />
      </>
    </MainLayout>
  );
}
