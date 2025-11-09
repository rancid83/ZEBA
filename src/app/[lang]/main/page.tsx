import MainPage from '@/components/main/Main';

const Page = async (props: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000 * 10));
  return <MainPage />;
};

export default Page;
