/* eslint-disable @next/next/no-img-element */
import { styles } from "../../../styles/style";
import React, { FC, useState } from "react";

type Props = {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (active: number) => void;
  setPreviewImage: (url: any) => void;
  previewImage: any;
};

const CourseInformation: FC<Props> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
  previewImage,
  setPreviewImage,
}) => {
  const [dragging, setDragging] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setActive(active + 1);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    setPreviewImage(URL.createObjectURL(file));
    setCourseInfo({ ...courseInfo, thumbnail: file });
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };
  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    setPreviewImage(URL.createObjectURL(file));
    setCourseInfo({ ...courseInfo, thumbnail: file });
  };

  return (
    <div className="w-[80%] m-auto mt-24">
      <form onSubmit={handleSubmit} className={styles.label}>
        <div>
          <label htmlFor="name">Course Name</label>
          <input
            type="text"
            name="name"
            required
            value={courseInfo.name}
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
            id="name"
            placeholder="MERN stack LMS platform with Next.js"
            className={styles.input}
          />
        </div>
        <br />
        <div className="mb-5">
          <label className={styles.label}>Course Description</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={8}
            placeholder="Write something amazing..."
            className={`${styles.input} !h-min !py-2`}
            value={courseInfo.description}
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, description: e.target.value })
            }
          />
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={styles.label}>Course Price</label>
            <input
              type="number"
              name="price"
              required
              value={courseInfo.price}
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, price: e.target.value })
              }
              id="price"
              placeholder="29"
              className={styles.input}
            />
          </div>
          <div className="w-[50%]">
            <label className={`${styles.label} w-[50%]`}>
              Estimated Price (optional)
            </label>
            <input
              type="number"
              name="estimatedPrice"
              value={courseInfo.estimatedPrice}
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
              }
              id="price"
              placeholder="79"
              className={`${styles.input}`}
            />
          </div>
        </div>
        <br />
        <div>
          <label className={styles.label} htmlFor="tags">
            Course Tags
          </label>
          <input
            type="text"
            required
            name="tags"
            value={courseInfo.tags}
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, tags: e.target.value })
            }
            id="tags"
            placeholder="MERN, Next 13, Socket io, tailwind css, LMS"
            className={styles.input}
          />
        </div>
        <br />
        <div className="w-full flex justify-between">
          <div className="w-[45%]">
            <label className={styles.label}>Course Level</label>
            <input
              type="text"
              name="level"
              value={courseInfo.level}
              required
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, level: e.target.value })
              }
              id="level"
              placeholder="Beginner/Intermediate/Expert"
              className={styles.input}
            />
          </div>
          <div className="w-[50%]">
            <label className={`${styles.label} w-[50%]`}>Demo Url</label>
            <input
              type="text"
              name=""
              required
              value={courseInfo.demoUrl}
              onChange={(e) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
              id="demoUrl"
              placeholder="eer74fd"
              className={styles.input}
            />
          </div>
        </div>
        <br />
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center cursor-pointer ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {courseInfo?.thumbnail ? (
              <img
                src={previewImage ? previewImage : courseInfo.thumbnail}
                alt=""
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="text-black dark:text-white">
                Drag and drop your thumbnail here or click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Next"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};

export default CourseInformation;
