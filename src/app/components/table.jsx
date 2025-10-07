"use client"

import React from "react"
import { motion } from "framer-motion"
import { CircleCheck } from "lucide-react"

// ✅ Reusable icon components
const IconFull = () => <CircleCheck className="w-6 h-6 mx-auto text-[#B4D511]" />
const IconPartial = () => <CircleCheck className="w-5 h-5 mx-auto text-[#AAAAAA]" />
const IconNone = () => <div className="w-8 h-8 mx-auto" />

export default function Table() {
  return (
    <section className="font-sans section-spacing container-padding pt-10 sm:pt-20 pb-20 lg:px-20 px-0 mx-8">
      <motion.div className="w-full flex flex-col items-center text-center">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-2 items-center">
          <h2 className="text-4xl text-center text-[#202020] md:text-4xl font-bold max-w-md">
            <span className="bg-gradient-to-r from-[#B5D411] via-[#B5D411] to-[#E9CF09] bg-clip-text text-transparent">Technology</span> Comparison
          </h2>
          <p className="max-w-sm text-center">Comparing the current LDES solutions with our Iron Air Batteries </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto lg:overflow-hidden">
          <table className="w-full table-auto text-center text-xs sm:text-base border-collapse">
            <thead>
              <tr className="">
                <th className="px-3 py-2 text-left text-lg font-bold"></th>
                {[
                  "Iron Air<br/>Batteries",
                  "Pumped Hydro<br/>Storage",
                  "Lithium Ion<br/>Batteries",
                  "Lead Acid<br/>Batteries",
                  "Zinc Air<br/>Batteries",
                  "Redox Flow<br/>Batteries",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className={`px-3 py-2 pb-5 border-l border-[#fff7af] ${
                      idx === 0 ? "text-xl font-bold" : "text-sm font-medium"
                    } text-[#222222]`}
                    dangerouslySetInnerHTML={{ __html: header }}
                  />
                ))}
              </tr>
            </thead>

            <tbody>
              {/* LCOS Row */}
              <tr>
                <th
                  scope="row"
                  className="p-2 py-12 text-lg font-bold text-center whitespace-nowrap"
                >
                  LCOS ($/kWh)
                </th>

                {/* LCOS values */}
                {["0.08", "0.09", "0.15", "0.19", "0.22", "0.25"].map((val, idx) => (
                  <td
                    key={idx}
                    className="py-1 font-semibold text-white border-l border-[#fff7af]"
                  >
                    <div
                      className={`mx-auto flex items-center justify-center rounded-full font-mono ${
                        idx === 0
                          ? "w-20 h-20 bg-gradient-to-br from-[#B5D411]/90 via-[#B5D411]/80 to-[#B5D411]/40 text-xl"
                          : "w-16 h-16 bg-gradient-to-br from-stone-800/30 to-stone-800/60 backdrop-blur text-lg"
                      }`}
                    >
                      {val}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Feature Rows */}
              {[
                {
                  label: "Intraday Balancing",
                  icons: [<IconFull />, <IconPartial />, <IconPartial />, <IconPartial />, <IconPartial />, <IconPartial />],
                },
                {
                  label: "Multiday Balancing",
                  icons: [<IconFull />, <IconPartial />, <IconPartial />, <IconNone />, <IconPartial />, <IconPartial />],
                },
                {
                  label: "Seasonal Balancing",
                  icons: [<IconFull />, <IconPartial />, <IconNone />, <IconNone />, <IconNone />, <IconNone />],
                },
                {
                  label: "Extreme Weather Events",
                  icons: [<IconFull />, <IconNone />, <IconNone />, <IconNone />, <IconNone />, <IconNone />],
                },
              ].map((row, i) => (
                <tr key={i} className={i === 3 ? "rounded-b-lg" : ""}>
                  <th
                    scope="row"
                    className="py-4 text-center font-medium whitespace-nowrap"
                  >
                    {row.label}
                  </th>
                  {row.icons.map((Icon, j) => (
                    <td key={j} className="border-l border-[#fff7af]">
                      {Icon}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}
