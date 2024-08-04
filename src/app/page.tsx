'use client'
import { FC, useState } from 'react'
import adBanners from '../../public/adBanners.json';
import BannerImageComp from './Components/BannerImageComp';
import EditBannerTemplateBs from './Components/EditBannerTemplateBs';

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  const [banners, setBanners] = useState(adBanners);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = (banner: any) => {
    setSelectedBanner(banner);
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
    setSelectedBanner(null);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map(banner => banner.id === updatedBanner.id ? updatedBanner : banner));
    handleEditClose();
  };

  return (
    <div className="flex w-full h-screen justify-center items-center text-[#EEEDEB] bg-[#2F3645]">
      <div className='max-w-[1200px] w-full h-screen grid lg:grid-cols-3 gap-16 md:grid-cols-2 sm:grid-cols-1  content-center items-center px-8'>

      {banners.map((banner: any) => (
        <BannerImageComp
          key={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEditClick(banner)}
        />
        ))}
      {selectedBanner && (
        <EditBannerTemplateBs
          open={isEditOpen}
          banner={selectedBanner}
          onClose={handleEditClose}
          onSave={handleSave}
        />
        )}
        </ div>
    </div>
  );
};

export default page