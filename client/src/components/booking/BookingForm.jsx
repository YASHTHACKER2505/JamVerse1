import { useForm } from "react-hook-form";
import { LuUpload, LuTicket, LuX } from "react-icons/lu";
import { motion } from "framer-motion";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useState } from "react";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const imageFile = watch("image");

  // Update preview whenever a new file is selected
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("fullName", data.name);
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("city", data.city);
      formData.append("age", data.age);
      formData.append("gender", data.gender);
      formData.append("tickets", data.tickets);
      formData.append("transactionId", data.transaction);
      formData.append("paymentScreenshot", data.image[0]);

      const res = await api.post("/bookings", formData);

      toast.success(res.data.message);

      // Reset all fields + preview after successful submit
      reset();
      setPreview(null);
    } catch (error) {
      console.log(error);
      toast.error("Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      {/* Background */}

      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-[150px]" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-yellow-400 text-sm font-semibold">
            BOOK YOUR PASS
          </p>

          <h2 className="mt-6 text-5xl font-black text-white">
            Reserve Your Seat
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Fill your details and upload your payment screenshot.
          </p>
        </motion.div>

        {/* Form */}

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-14"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Input
              label="Full Name"
              placeholder="Enter your name"
              register={register("name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              error={errors.name}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              error={errors.email}
            />

            <Input
              label="Mobile Number"
              placeholder="Enter mobile number"
              register={register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              error={errors.mobile}
            />

            <Input
              label="City"
              placeholder="Enter city"
              register={register("city", {
                required: "City is required",
              })}
              error={errors.city}
            />

            <Input
              label="Age"
              placeholder="18"
              type="number"
              register={register("age", {
                required: "Age is required",
                min: { value: 1, message: "Age must be greater than 0" },
                max: { value: 120, message: "Enter a valid age" },
              })}
              error={errors.age}
            />

            <div>
              <label className="block text-white mb-3">Gender</label>

              <select
                {...register("gender", {
                  required: "Gender is required",
                })}
                defaultValue=""
                className="w-full rounded-xl bg-[#0F172A] border border-white/10 px-5 py-4 text-white outline-none focus:border-yellow-400"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <Input
              label="Number of Tickets"
              type="number"
              placeholder="1"
              register={register("tickets", {
                required: "Number of tickets is required",
                min: { value: 1, message: "At least 1 ticket is required" },
                max: { value: 5, message: "Maximum 5 tickets allowed" },
              })}
              error={errors.tickets}
            />

            <Input
              label="Transaction ID"
              placeholder="UPI Transaction ID"
              register={register("transaction", {
                required: "Transaction ID is required",
              })}
              error={errors.transaction}
            />
          </div>

          {/* Upload */}

          <div className="mt-10">
            <label className="block text-white mb-3">
              Upload Payment Screenshot
            </label>

            {!preview ? (
              <label className="flex items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-yellow-400/30 py-10 cursor-pointer hover:border-yellow-400 transition">
                <LuUpload size={28} />
                <span className="text-slate-300">Choose Screenshot</span>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register("image", {
                    required: "Payment screenshot is required",
                    onChange: handleImageChange,
                  })}
                />
              </label>
            ) : (
              <div className="relative rounded-2xl border-2 border-dashed border-yellow-400/50 p-4">
                <img
                  src={preview}
                  alt="Payment screenshot preview"
                  className="mx-auto max-h-64 rounded-xl object-contain"
                />

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-slate-300 truncate">
                    {imageFile?.[0]?.name}
                  </span>

                  <label className="cursor-pointer text-sm text-yellow-400 hover:underline flex items-center gap-1">
                    <LuX size={16} />
                    Change
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      {...register("image", {
                        required: "Payment screenshot is required",
                        onChange: handleImageChange,
                      })}
                    />
                  </label>
                </div>
              </div>
            )}

            {errors.image && (
              <p className="mt-2 text-sm text-red-400">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Button */}

          <button
            disabled={loading}
            className={`mt-12 w-full rounded-2xl py-5 text-xl font-bold flex items-center justify-center gap-3 transition
  ${
    loading
      ? "bg-yellow-500 cursor-not-allowed opacity-80"
      : "bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-[1.02] text-black"
  }`}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                <LuTicket size={24} />
                Submit Booking
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

const Input = ({ label, register, error, ...props }) => (
  <div>
    <label className="block text-white mb-3">{label}</label>

    <input
      {...register}
      {...props}
      className={`w-full rounded-xl bg-[#0F172A] border px-5 py-4 text-white placeholder:text-slate-500 outline-none transition
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-white/10 focus:border-yellow-400"
        }`}
    />

    {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
  </div>
);

export default BookingForm;