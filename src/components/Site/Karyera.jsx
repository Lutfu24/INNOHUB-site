import { Career } from "../../services/careerservices.js";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "./ErrorMessage.jsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LiquidButtonDemo from "../ui/muracietButton.jsx";

export default function CareerPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    Career(data)
      .then((res) => toast.success(res.message))
      .catch((err) => toast.error(err.message));
  }

  const infoBlocks = [
    {
      title: "Fərdi Dəstək",
      desc: "Bacarıq və məqsədlərinizə uyğun fərdi karyera yönləndirilməsi.",
    },
    {
      title: "Peşəkar Mentorluq",
      desc: "Sahə üzrə real təcrübəyə malik mentorlarla inkişaf.",
    },
    {
      title: "Praktik Yanaşma",
      desc: "Real layihələr və bazar tələblərinə uyğun biliklər.",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden px-6 py-16">
      <Toaster />

      {/* Header */}
      <header className="relative z-10 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[#02C8FE] mb-4">
          Karyera Dəstəyi
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Doğru istiqamət, real bacarıqlar və peşəkar inkişaf üçün dəstək.
        </p>
      </header>

      {/* Form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-3"
      >
        <input
          {...register("firstName", { required: "Ad daxil edin" })}
          type="text"
          placeholder="Ad"
          className="border px-5 py-2 rounded-md w-200"
        />
        {errors.firstName && (
          <ErrorMessage message={errors.firstName.message} />
        )}
        <input
          {...register("lastName", { required: "Soyad daxil edin" })}
          type="text"
          placeholder="Soyad"
          className="border px-5 py-2 rounded-md w-200"
        />
        {errors.lastName && <ErrorMessage message={errors.lastName.message} />}
        <input
          {...register("email", {
            required: "Email daxil edin",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "email düzgün formatda olmalıdır",
            },
          })}
          type="email"
          placeholder="Email"
          className="border px-5 py-2 rounded-md w-200"
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
        <input
          {...register("phone", {
            required: "Nömrə daxil edin",
            maxLength: {
              value: 13,
              message: "Nömrə çox uzun olmaz",
            },
          })}
          type="text"
          placeholder="Telefon"
          className="border px-5 py-2 rounded-md w-200"
        />
        {errors.phone && <ErrorMessage message={errors.phone.message} />}
        <Controller
          name="field"
          control={control}
          rules={{ required: "Sahə daxil edin" }}
          render={({ field }) => {
            return (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-200">
                  <SelectValue placeholder="Sahənizi seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sahələr</SelectLabel>
                    <SelectItem value="IT">Web Proqramlaşdırma</SelectItem>
                    <SelectItem value="Design">Dizayn</SelectItem>
                    <SelectItem value="AI">Reqemsal Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            );
          }}
        />
        {errors.field && <ErrorMessage message={errors.field.message} />}
        <button type="submit">
          <LiquidButtonDemo />
        </button>
      </form>

      {/* Info Grid */}
      <section className="relative z-10 mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoBlocks.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl shadow-xl p-6 text-center"
          >
            <h3 className="text-2xl font-semibold text-[#02C8FE] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
