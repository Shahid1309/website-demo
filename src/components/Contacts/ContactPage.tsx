
'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      console.log('Form submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      content: '123 Design Street, New York, NY 10001',
      subContent: 'Visit us during business hours'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+1 (555) 123-4567',
      subContent: 'Available Mon-Fri 9AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'hello@luxeinteriors.com',
      subContent: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      subContent: 'Saturday: 10:00 AM - 4:00 PM'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or want to discuss a project? We'd love to hear from you.
            Reach out to our team and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-4">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                </div>
              </div>
              
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-gray-700" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h4>
                  <p className="text-gray-600 mb-8 text-lg">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-4 rounded-xl border-2 transition-all duration-200 ${
                            errors.name 
                              ? 'border-red-300 bg-red-50' 
                              : 'border-gray-200 hover:border-gray-300 focus:border-gray-500'
                          } focus:outline-none focus:ring-0 bg-white`}
                          placeholder="Your full name"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 bg-white transition-all duration-200"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-4 rounded-xl border-2 transition-all duration-200 ${
                          errors.email 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-gray-200 hover:border-gray-300 focus:border-gray-500'
                        } focus:outline-none focus:ring-0 bg-white`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 resize-none ${
                        errors.message 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-gray-200 hover:border-gray-300 focus:border-gray-500'
                      } focus:outline-none focus:ring-0 bg-white`}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-gray-100 group-hover:bg-gray-200 p-4 rounded-2xl text-gray-700 transition-colors duration-200">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-800 font-medium">{item.content}</p>
                          <p className="text-gray-500 text-sm mt-1">{item.subContent}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}