import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type PostComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const CommentForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PostComment>();

  const onSubmit: SubmitHandler<PostComment> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-gray-100 rounded-md">
      <div>

       
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">NOME</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Nome é obrigatório" })}
          className="w-full p-2 border rounded-md text-black"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
          })}
          className="w-full p-2 border rounded-md text-black"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="body" className="block text-sm font-medium">Comment</label>
        <textarea
          id="body"
          {...register("body", { required: "Comentário é obrigatório" })}
          className="w-full p-2 border rounded-md text-black"
        />
        {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  );
};

export default CommentForm;
