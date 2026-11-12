import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  BookOpen,
  Award,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/marineData';

export default function TrainingPrograms() {
  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb Bar */}
      <div className="bg-[#F4F6F8] border-b border-gray-200 py-3 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-gray-600">
          <Link to="/" className="hover:text-[#E9231B]">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#E9231B]">Services</Link>
          <span>/</span>
          <span className="font-semibold text-[#071A35]">Training Programs</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-[#071A35] text-white py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroImages.marineEngineer})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A35] via-[#071A35]/90 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-[#E9231B] font-bold text-xs uppercase tracking-wider block">
              PAGE · SERVICES › TRAINING PROGRAMS
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Training Programs
            </h1>
            <p className="text-xl text-gray-200 font-medium">
              Building Competence. Ensuring Safety.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              STHOS Ltd delivers industry-leading training programs for marine radio communication and navigational equipment. We equip seafarers and shore personnel with the knowledge and practical skills required to operate modern systems safely, efficiently, and in full regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A35]">
                Overview
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  In today’s rapidly evolving maritime environment, proper training is essential for safety, compliance, and operational excellence. Our programs combine theoretical knowledge with hands-on practice in realistic scenarios, helping crews master the equipment they use every day in the Gulf of Guinea and beyond.
                </p>
              </div>

              <div className="pt-4 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#071A35] mb-3">
                    Core Communication Training
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "GMDSS General Operator’s Certificate (GOC) and Restricted Operator’s Certificate (ROC)",
                      "Marine VHF / DSC Radio Operator Training (SRC)",
                      "MF/HF SSB and Satellite Communication Systems",
                      "Distress, Urgency & Safety Communication Procedures"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#071A35] mb-3">
                    Navigational Equipment Training
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "ECDIS (Generic + Type-Specific for major brands)",
                      "Radar Observation and ARPA",
                      "Integrated Bridge Systems and Voyage Planning",
                      "AIS, GPS/GLONASS, and Electronic Navigation Aids"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#071A35] mb-3">
                    Specialised &amp; Advanced Courses
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Bridge Resource Management (BRM) & Bridge Team Management (BTM)",
                      "Crisis Management and Human Factors in Navigation",
                      "Annual Refresher and Revalidation Training",
                      "Custom Onboard Training Packages"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              {/* Delivery Options */}
              <div className="bg-[#F4F6F8] p-8 rounded-2xl border border-gray-200 space-y-4">
                <h3 className="text-xl font-bold text-[#071A35]">
                  Delivery Options
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {[
                    "Classroom training at our Port Harcourt facility",
                    "Onboard vessel training",
                    "Hybrid (online + practical) programs",
                    "Full-mission simulator sessions"
                  ].map((opt, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle className="w-4 h-4 text-[#123B67] shrink-0 mt-0.5" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Training Approach */}
              <div className="bg-[#F4F6F8] p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#071A35] mb-6 flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-[#E9231B]" />
                  <span>Our Training Approach</span>
                </h3>
                <ol className="space-y-4 text-sm text-gray-700">
                  {[
                    { title: "Needs Assessment", desc: "Evaluation of your crew’s current competency levels" },
                    { title: "Customised Course Design", desc: "Tailored content based on vessel type and equipment" },
                    { title: "Interactive Learning", desc: "Combination of theory, practical exercises, and simulator training" },
                    { title: "Assessment & Certification", desc: "Rigorous practical and theoretical evaluations" },
                    { title: "Continuous Improvement", desc: "Feedback and refresher recommendations" }
                  ].map((st, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-[#071A35] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <div>
                        <strong className="text-[#071A35] block">{st.title}</strong>
                        <span>{st.desc}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Why Choose & Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#071A35]">
                Why Choose STHOS Ltd Training?
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {[
                  "IMO, STCW, and NIMASA compliant courses",
                  "Experienced instructors who are former master mariners and technical specialists with Gulf of Guinea operational knowledge",
                  "Modern training facilities with realistic simulators replicating actual ship environments",
                  "High pass rates and internationally recognised certificates",
                  "Flexible scheduling to minimise operational disruption",
                  "Post-training support and competency assessments"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#E9231B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#071A35]">
                Key Benefits
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                {[
                  "Enhanced crew confidence and operational efficiency",
                  "Reduced risk of human error in critical situations",
                  "Full compliance with flag state and port state requirements",
                  "Improved safety record and insurance standing",
                  "Better utilisation of your onboard technology investment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#123B67] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-[#071A35] mb-2">Training Facilities</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our dedicated training centre in Port Harcourt features state-of-the-art simulators and equipment labs, providing a safe environment to master complex systems before applying them at sea.
                </p>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="bg-[#071A35] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-6">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Get Started Today
              </h3>
              <p className="text-sm text-gray-300">
                Invest in your crew’s competence and your vessel’s safety.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                state={{ service: "Request Training Needs Assessment" }}
                className="bg-[#E9231B] hover:bg-[#C21A13] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Request a Training Needs Assessment
              </Link>
              <Link
                to="/contact"
                state={{ service: "View Course Calendar" }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Course Calendar
              </Link>
              <Link
                to="/contact"
                state={{ service: "Enrol in Training" }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
              >
                Enrol Now
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-gray-300">
              <span>Direct Training Desk: </span>
              <strong className="text-white">{COMPANY_INFO.salesPhone}</strong>
              <span className="mx-2">•</span>
              <span>Email: </span>
              <a href={`mailto:${COMPANY_INFO.trainingEmail}`} className="text-[#E9231B] font-bold hover:underline">
                {COMPANY_INFO.trainingEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

