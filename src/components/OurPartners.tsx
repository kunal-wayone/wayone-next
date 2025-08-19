"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurPartners = () => {
  const clients = [
    { id: 1, name: "anz", logo: "/assets/images/clients/c1.png" },
    { id: 2, name: "kiwi", logo: "/assets/images/clients/c2.png" },
    { id: 3, name: "tsb", logo: "/assets/images/clients/c3.png" },
    { id: 4, name: "westpac", logo: "/assets/images/clients/c4.png" },
    { id: 5, name: "client5", logo: "/assets/images/clients/c5.png" },
  ];

  // Duplicate the list to create a seamless effect
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative w-full overflow-hidden bg-white py-4 mt-10">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 35, // Adjust speed here
          }}
        >
          {/* Repeated content twice for seamless scroll */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12">
              {repeatedClients.map((client, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex-shrink-0 rounded-lg overflow-hidden"
                >
                  <Image
                    src={client.logo}
                    width={300}
                    height={100}
                    alt={`${client.name}`}
                    unoptimized
                    className="object-contain h-16 w-fit p-2"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPartners;
