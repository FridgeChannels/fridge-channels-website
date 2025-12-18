"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link as LinkIcon, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Navigation } from '@/components/navigation';

export default function SignupPage() {
  const [email, setEmail] = React.useState('');
  const [newsletterUrl, setNewsletterUrl] = React.useState('');
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [time, setTime] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟提交延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 这里将来会替换为真实的 API 调用
    console.log('Form submitted:', {
      email,
      newsletterUrl,
      date: date ? format(date, 'yyyy-MM-dd') : '',
      time,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F7F7F4]">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl shadow-lg p-12 text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-foreground"
              >
                感谢您的关注
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground"
              >
                我们会尽快和您取得联系
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-lg p-8 space-y-6">
            <div className="text-center space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-foreground">
                Turn on Fridge Channel Magnet
              </h1>
              <p className="text-muted-foreground">
                请填写以下信息，我们会尽快与您联系
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Section */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="email" className="font-medium text-card-foreground">
                  邮箱 <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </motion.div>

              {/* Newsletter URL Section */}
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="newsletterUrl" className="font-medium text-card-foreground">
                  Newsletter 地址 <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="newsletterUrl"
                    type="url"
                    value={newsletterUrl}
                    onChange={(e) => setNewsletterUrl(e.target.value)}
                    placeholder="https://your-newsletter.com"
                    required
                    className="h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </motion.div>

              {/* Date and Time Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date Picker */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label className="font-medium text-card-foreground">
                    日期 <span className="text-destructive">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-12 w-full justify-start text-left font-normal rounded-xl",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        {date ? format(date, "yyyy-MM-dd") : "选择日期"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        required
                      />
                    </PopoverContent>
                  </Popover>
                </motion.div>

                {/* Time Picker */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="time" className="font-medium text-card-foreground">
                    时间 <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="h-12 w-full rounded-xl border border-input bg-transparent pl-10 pr-4 text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-xl text-base font-bold"
                >
                  {isSubmitting ? "提交中..." : "提交"}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

