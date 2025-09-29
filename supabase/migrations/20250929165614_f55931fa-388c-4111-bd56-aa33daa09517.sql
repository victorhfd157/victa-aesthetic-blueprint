-- Create enum for contact submission status
CREATE TYPE public.contact_status AS ENUM ('pending', 'contacted', 'converted');

-- Create table for storing contact submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  status contact_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for admins to manage all submissions (no auth required for now since it's public form)
CREATE POLICY "Allow public insert on contact_submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance on email lookups
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);

-- Create index for status filtering
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);

-- Create index for created_at for sorting
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);