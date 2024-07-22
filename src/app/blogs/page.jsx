import Link from 'next/link';
import React from 'react';

const blogsPage = () => {
    return (
        <div className='p-28'>
            <h1 className='text-center'>Here is our blogs</h1>
            {
                blogs.map(blog => <div key={blog.slug} className='mb-3'>
                        <h1 className='text-xl'>{blog.title}</h1>
                    <h1>{blog.description}</h1>
                    <button className='bg-blue-500 rounded-xl p-2'>
                        <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                    </button>
                    </div>
                )
                
            }
        </div>
    );
};



const blogs = [
    {
        "slug": "exploring-the-great-outdoors",
        "title": "Exploring the Great Outdoors: Top 10 Hiking Trails",
        "description": "Discover the most breathtaking hiking trails around the world. From challenging treks to leisurely walks, these trails offer something for every adventurer."
    },
    {
        "slug": "the-art-of-minimalist-living",
        "title": "The Art of Minimalist Living: Tips for a Simpler Life",
        "description": "Embrace a minimalist lifestyle with practical tips and insights. Learn how to declutter your space and mind for a more fulfilling life."
    },
    {
        "slug": "mastering-the-basics-of-photography",
        "title": "Mastering the Basics of Photography",
        "description": "Get started with photography by mastering the basics. This guide covers essential techniques and tips for beginners."
    },
    {
        "slug": "healthy-eating-on-a-budget",
        "title": "Healthy Eating on a Budget: Affordable Nutrition Tips",
        "description": "Learn how to eat healthy without breaking the bank. Explore budget-friendly recipes and nutrition tips to maintain a balanced diet."
    },
    {
        "slug": "a-guide-to-sustainable-fashion",
        "title": "A Guide to Sustainable Fashion",
        "description": "Explore the world of sustainable fashion. Learn how to make eco-friendly choices and discover brands that prioritize the planet."
    },
    {
        "slug": "the-benefits-of-meditation",
        "title": "The Benefits of Meditation: A Path to Inner Peace",
        "description": "Unlock the benefits of meditation. This guide explores various techniques and the positive impacts meditation can have on your life."
    },
    {
        "slug": "digital-marketing-strategies-for-2024",
        "title": "Digital Marketing Strategies for 2024",
        "description": "Stay ahead in the digital marketing game with the latest strategies and trends for 2024. Learn how to optimize your online presence."
    },
    {
        "slug": "home-gardening-tips-for-beginners",
        "title": "Home Gardening Tips for Beginners",
        "description": "Start your gardening journey with these beginner tips. Learn how to grow your own vegetables, herbs, and flowers at home."
    },
    {
        "slug": "travel-guide-to-japan",
        "title": "Travel Guide to Japan: Must-Visit Places and Experiences",
        "description": "Plan your trip to Japan with this comprehensive travel guide. Discover must-visit places, cultural experiences, and travel tips."
    },
    {
        "slug": "how-to-start-a-successful-podcast",
        "title": "How to Start a Successful Podcast",
        "description": "Learn how to create and launch a successful podcast. This guide covers everything from concept development to marketing your episodes."
    },
    {
        "slug": "the-future-of-electric-vehicles",
        "title": "The Future of Electric Vehicles",
        "description": "Explore the future of electric vehicles. Understand the latest advancements, benefits, and challenges in the EV industry."
    },
    {
        "slug": "building-a-remote-work-friendly-home-office",
        "title": "Building a Remote Work-Friendly Home Office",
        "description": "Create a productive and comfortable home office for remote work. Get tips on setup, ergonomics, and maintaining work-life balance."
    },
    {
        "slug": "understanding-blockchain-technology",
        "title": "Understanding Blockchain Technology",
        "description": "Dive into the world of blockchain technology. Learn how it works, its applications, and its potential to transform various industries."
    },
    {
        "slug": "the-importance-of-self-care",
        "title": "The Importance of Self-Care: Tips for a Healthier You",
        "description": "Prioritize your well-being with self-care. This guide offers practical tips and advice on how to incorporate self-care into your daily routine."
    },
    {
        "slug": "beginner's-guide-to-investing",
        "title": "Beginner's Guide to Investing",
        "description": "Start your investment journey with confidence. Learn the basics of investing, including key concepts, strategies, and tips for beginners."
    }
]

export default blogsPage;