"use client"
import { ChangeEvent, useState } from "react";

import Image from "next/image";
import { SessionInterface } from "@/common.types";
import FormField from "./FormField";
import { categoryFilters } from "@/constants";
import CustomMenu from "./CustomMenu";
import Button from "./Button";

type Props = {
  type: string,
  session: SessionInterface
}
const ProjectForm = ({ type, session }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    image: '',
    title: '',
    description: '',
    githubUrl: '',
    category: ''
  })


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if(type === 'create') {

      } 
    }
    catch (error) {

    }
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes('image')) {
      return alert('Please upload an image file')
    };

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;
      handleStateChange('image', result);
    }
  };

  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) =>
      ({ ...prevState, [fieldName]: value }))
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flexStart form"
    >
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
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

      <FormField
        title="Title"
        state={form.title}
        placeholder="Untitled Project"
        setState={(value) => handleStateChange('title', value)}
      />

      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange('category', value)}
      />

      <FormField
        title="Description"
        state={form.description}
        placeholder="Showcase and discover remarkable algorithm artwork."
        setState={(value) => handleStateChange('description', value)}
      />

      <FormField
        type="url"
        title="Github URL"
        state={form.githubUrl}
        placeholder="https://github.com/HiloSolutions"
        setState={(value) => handleStateChange('githubUrl', value)}
      />

      {/* custom input */}

      <div className="flexStart w-full">
        <Button
          title={
            isSubmitting
              ? `${type === 'create' ? 'Creating' : 'Editing'}`
              : `${type === 'create' ? 'Create' : 'Edit'}`
          }
          type="submit"
          leftIcon={isSubmitting ? "" : '/plus.svg'}
          isSubmitting={isSubmitting}
        />
      </div>
    </form>
  )
}

export default ProjectForm