import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContainerForm } from "./styles";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email().required("Email é obrigatório"),
    phone: yup.number().required("Whatsapp é obrigatório"),
  })
  .required();

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Nome" />
        <p>{errors.name?.message}</p>

        <input {...register("email")} placeholder="E-mail" />
        <p>{errors.email?.message}</p>

        <input {...register("phone")} placeholder="Whatsapp" />
        <p>{errors.phone?.message}</p>

        <button type="submit">Enviar</button>
      </form>
    </ContainerForm>
  );
}

export default Form;
