import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldAlert,
  Send,
  CheckCircle,
  MessageSquare,
  AlertTriangle,
  Compass,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO } from "../data/marineData";

export default function Contact() {
  const location = useLocation();
  const prefillService =
    location.state?.service || location.state?.equipment || "";

  const [formData, setFormData] = useState({
    fullName: "",
    vesselName: "",
    email: "",
    phone: "",
    serviceRequired: prefillService || "Class Certification",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim())
      errors.message = "Message details are required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form validated cleanly
      setFormSubmitted(true);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello STHOS Limited, I am inquiring regarding marine electronics support for my vessel. Service: ${formData.serviceRequired}`,
    );
    window.open(`https://wa.me/2348051324788?text=${text}`, "_blank");
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.bridge})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-[#E9231B] font-bold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Direct Operational Link</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
  Contact STHOS Limited for Marine Technical Support
  <span className="text-[#E9231B]">.</span>
</h1>
            {/* <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Connect with Nigeria’s marine communication, navigation and class
              certification engineering experts. Rapid quotes, survey
              scheduling, and 24/7 offshore emergency response.
            </p> */}
          </div>
        </div>
      </section>

      {/* Emergency Alert Strip */}
      {/* <div className="bg-[#E9231B] text-white py-3 px-4 sm:px-6 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-bold uppercase tracking-wider">Urgent Vessel Offshore Breakdown or Survey Deadline?</span>
          </div>
          <div>
            <span>Emergency 24/7 Hotline: </span>
            <a href={`tel:${COMPANY_INFO.emergencyHotline}`} className="font-black text-sm underline hover:text-gray-200 ml-1">
              {COMPANY_INFO.emergencyHotline}
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Content Grid */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN */}
            {/* Unified Contact & Emergency Information */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                {/* Emergency Header */}
                <div className="bg-[#071A35] text-white p-7 sm:p-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E9231B] flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B63]">
                        Immediate Vessel Response
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold mt-1">
                        24/7 Emergency Dispatch
                      </h3>
                    </div>
                  </div>

                  {/* <p className="text-sm text-gray-300 leading-relaxed">
                    Critical navigational blackout, radar failure, or urgent
                    class survey readiness before departure. Our technical
                    response team supports vessels around Onne Port, Bonny
                    Fairway, Escravos, and offshore anchorages.
                  </p> */}

                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                    {/* <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-semibold">
                      Emergency Hotline
                    </span> */}

                    <a
                      href={`tel:${COMPANY_INFO.emergencyHotline}`}
                      className="text-2xl sm:text-3xl font-black text-[#E9231B] hover:text-white transition-colors block mt-2"
                    >
                      {COMPANY_INFO.emergencyHotline}
                    </a>

                    {/* <div className="flex items-center gap-2 mt-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-gray-300">
                        Emergency Support Available 24/7
                      </span>
                    </div> */}
                  </div>
                </div>

                {/* Contact Directory */}
                <div className="p-7 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E9231B]">
                        Get In Touch
                      </span>
                      <h3 className="text-lg font-bold text-[#071A35] mt-1">
                        Contact Details
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#F4F6F8] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#071A35]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#E9231B]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-[#071A35]">
                          Port Harcourt
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                          {COMPANY_INFO.addressPlaceholder}
                        </p>
                      </div>
                    </div>

                    {/* Sales Phone */}
                    <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#E9231B]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-[#071A35]">
                          General Enquiries
                        </h4>
                        <a
                          href={`tel:${COMPANY_INFO.salesPhone}`}
                          className="text-sm text-gray-600 mt-1 inline-block hover:text-[#E9231B] transition-colors"
                        >
                          {COMPANY_INFO.salesPhone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#E9231B]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-[#071A35]">
                          Official Email
                        </h4>
                        <a
                          href={`mailto:${COMPANY_INFO.primaryEmail}`}
                          className="text-sm text-gray-600 mt-1 inline-block hover:text-[#E9231B] transition-colors break-all"
                        >
                          {COMPANY_INFO.primaryEmail}
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[#E9231B]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-[#071A35]">
                          Operational Hours
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {COMPANY_INFO.businessHours}
                        </p>
                        <span className="text-xs font-bold text-[#E9231B] mt-1 inline-block">
                          Emergency Support: 24/7/365
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="pt-5 border-t border-gray-100">
                    <a
                      href={`tel:${COMPANY_INFO.salesPhone}`}
                      className="w-full flex items-center justify-center gap-2 bg-[#071A35] hover:bg-[#123B67] text-white py-3.5 px-5 rounded-xl text-sm font-bold transition-colors"
                    >
                      Contact Our Team
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-200">
              <div className="border-b border-gray-100 pb-6 mb-8">
                <span className="text-xs uppercase font-bold tracking-wider text-[#E9231B] block mb-1">
                  Inquiry Desk
                </span>
                <h2 className="text-2xl font-bold text-[#071A35]">
                  Quick Marine Inquiry Form
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your vessel specifics and our Port Harcourt technical
                  coordinator will contact you promptly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center space-y-4">
                  <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-emerald-900">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. A STHOS
                    technical superintendent has been notified regarding your
                    inquiry for <strong>{formData.serviceRequired}</strong>.
                  </p>
                  <p className="text-xs text-emerald-700">
                    For urgent sea emergencies, please call our 24/7 hotline
                    directly: <strong>{COMPANY_INFO.emergencyHotline}</strong>
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: "",
                        vesselName: "",
                        email: "",
                        phone: "",
                        serviceRequired: "Class Certification",
                        message: "",
                      });
                    }}
                    className="mt-4 bg-[#071A35] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#071A35] mb-2">
                        Full Name <span className="text-[#E9231B]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Capt. E. Alabo"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#071A35] ${
                          formErrors.fullName
                            ? "border-[#E9231B]"
                            : "border-gray-200"
                        }`}
                      />
                      {formErrors.fullName && (
                        <span className="text-[11px] text-[#E9231B] mt-1 block">
                          {formErrors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Company / Vessel Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#071A35] mb-2">
                        Company / Vessel Name
                      </label>
                      <input
                        type="text"
                        placeholder="MT Bonny Pride / Operator"
                        value={formData.vesselName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            vesselName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#071A35]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#071A35] mb-2">
                        Email Address <span className="text-[#E9231B]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="superintendent@fleet.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#071A35] ${
                          formErrors.email
                            ? "border-[#E9231B]"
                            : "border-gray-200"
                        }`}
                      />
                      {formErrors.email && (
                        <span className="text-[11px] text-[#E9231B] mt-1 block">
                          {formErrors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#071A35] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 ..."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#071A35]"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#071A35] mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceRequired: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#071A35] bg-white cursor-pointer"
                    >
                      <option value="Class Certification">
                        Class Certification &amp; Radio Survey
                      </option>
                      <option value="Marine Radio Communication">
                        Marine Radio Communication (VHF/HF/GMDSS)
                      </option>
                      <option value="Marine Navigation Systems">
                        Marine Navigation (Radar, ECDIS, Gyro)
                      </option>
                      <option value="Installation & Integration">
                        Installation &amp; Integration
                      </option>
                      <option value="Repairs & Troubleshooting">
                        Repairs &amp; Troubleshooting
                      </option>
                      <option value="Maintenance & Servicing">
                        Maintenance &amp; Servicing
                      </option>
                      <option value="Crew Training Programs">
                        Crew Training Programs
                      </option>
                      <option value="Emergency Support">
                        24/7 Emergency Support
                      </option>
                      <option value="Equipment Supply">
                        Marine Equipment Supply
                      </option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#071A35] mb-2">
                      Message / Vessel Location &amp; Scope{" "}
                      <span className="text-[#E9231B]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Specify vessel berth/anchorage (e.g. Onne Port, Bonny Offshore), equipment model (Furuno, Sailor, JRC) and deadline..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#071A35] ${
                        formErrors.message
                          ? "border-[#E9231B]"
                          : "border-gray-200"
                      }`}
                    />
                    {formErrors.message && (
                      <span className="text-[11px] text-[#E9231B] mt-1 block">
                        {formErrors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit and WhatsApp Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#E9231B] hover:bg-[#C21A13] text-white px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all shadow-md active:scale-95"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Technical Desk</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <span className="text-xs font-bold uppercase tracking-wider text-[#E9231B]">
        Marine Technical Services
      </span>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A35] mt-3 mb-5">
        How Can STHOS Limited Support Your Vessel?
      </h2>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        STHOS Limited welcomes enquiries from vessel owners,
        ship operators, marine contractors and offshore service
        companies seeking marine communication and navigation
        solutions. Contact our team for enquiries about GMDSS
        equipment, VHF and MF/HF radio systems, radar,
        AIS, GPS, marine electronics installation, repairs,
        maintenance and radio surveys.
      </p>
    </div>
  </div>
</section>

    </div>

  );
}
