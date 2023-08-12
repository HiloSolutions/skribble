"use client"

import Image from "next/image"
import { SessionInterface } from "@/common.types"

type Props = {
  type: string,
  session: SessionInterface
}
const ProjectForm = ({ type, session }: Props) => {

  const form = {
    image: '',
  };

  const handleFormSubmit = (e: React.FormEvent) => {

  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {

  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flexStart form"
    >
      <div className="flexStart form_image-container">
        <label htmlForm="poster" className="flexCenter form_image-label">
          {!form.image && 'Choose a cover for your project'}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === 'create'}
          className="form_image-input"
          onChange={handleChangeImage}
        />
        {form.image &&
          <Image
            src={form.image}
            className="sm:p-10 object-container z-20"
            alt="Project Poster"
            fill
          />
        }
      </div>
    </form>
  )
}

export default ProjectForm