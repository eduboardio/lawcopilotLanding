"use client";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:info@lawcopilot.com?subject=${subject}&body=Hello, I am ${firstName} ${lastName}. My email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container mb-20 sm:mb-20 relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute -top-16 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-32 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Our Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about Law Copilot? Our experts are ready to assist you on your journey to AI-powered legal excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <Card className="bg-gradient-to-br from-background/80 to-background border-0 shadow-xl backdrop-blur-sm overflow-hidden relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            <CardHeader>
              <h3 className="text-2xl font-bold text-primary">How to Reach Us</h3>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10">
              <div className="grid gap-6">
                <div className="flex items-start gap-4 group/item hover:bg-primary/5 p-3 rounded-lg transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                    <p className="text-muted-foreground">123 Main Street, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group/item hover:bg-primary/5 p-3 rounded-lg transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group/item hover:bg-primary/5 p-3 rounded-lg transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">info@lawcopilot.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group/item hover:bg-primary/5 p-3 rounded-lg transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday<br />9AM - 5PM EST</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card className="bg-gradient-to-br from-background/95 to-background/80 border shadow-xl backdrop-blur-md">
            <CardHeader>
              <h3 className="text-2xl font-bold">Send Us a Message</h3>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid w-full gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" className="bg-background/50 border-secondary/20 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" className="bg-background/50 border-secondary/20 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="johndoe@example.com"
                            className="bg-background/50 border-secondary/20 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Subject</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-secondary/20 focus:border-primary">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="General Inquiry">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="Pricing">Pricing</SelectItem>
                            <SelectItem value="Technical Support">
                              Technical Support
                            </SelectItem>
                            <SelectItem value="Feature Request">
                              Feature Request
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Your message..."
                            className="resize-none bg-background/50 border-secondary/20 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};