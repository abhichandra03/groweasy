"use client";
import React, { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";

interface EditBannerTemplateBsProps {
  open: boolean;
  banner: any;
  onClose: () => void;
  onSave: (updatedBanner: any) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  open,
  banner,
  onClose,
  onSave,
}) => {
  const [editedBanner, setEditedBanner] = useState(banner);
  const [imageURL, setImageURL] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBanner({ ...editedBanner, [name]: value });
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  if (!open) return null;

  return (
    <div className="absolute inset-0 flex items-center backdrop-blur-sm">
      <div className="bg-[#939185]  p-6 rounded-t-lg w-full max-w-md mx-auto text-black">
        <h3 className="text-xl font-semibold">Edit Ad Banner</h3>
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src={imageURL ? imageURL : editedBanner.image}
            alt=""
            width={200}
            height={200}
            className="object-contain py-4 transition-opacity opacity-10 duration-[2000]"
            onLoadingComplete={(image) => image.classList.remove('opacity-10')}
            priority
          />
        </div>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            alert("Upload Completed");
            setImageURL(res[0].url);
            setEditedBanner({ ...editedBanner, image: res[0].url });
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
            console.log(error);
          }}
          className="px-4 py-2"
        />
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          className="w-full mt-4 p-2 border rounded"
        />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Description"
          className="w-full mt-4 p-2 border rounded"
        />
        <input
          type="text"
          name="cta"
          onChange={handleChange}
          placeholder="CTA"
          className="w-full mt-4 p-2 border rounded"
        />
        <div className="flex justify-between mt-6">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Save
          </button>
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
