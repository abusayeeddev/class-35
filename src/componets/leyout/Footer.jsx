import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Images from "../common/Images";
import footerImg from "../../assets/Logo.png";

function Footer() {
  return (
    <Container>
      <Flex className={`grid-cols-12 gap-35`}>
        <div class="col-span-5">
          <div class="flex items-center gap-2 mb-6">
            <Images imgsrc={footerImg} />
            <h2 class="text-xl font-semibold text-gray-800">Innovate</h2>
          </div>

          <p class="text-gray-600 leading-relaxed max-w-md">
            Install Any Demo Or Template With A Single Click. Can Mix And Match
            All The Demos & Templates. Every Demo Can Be Turned Into One Or
            Multi-Page.
          </p>
        </div>

        <div class="col-span-3">
          <h3 class="text-lg font-semibold text-gray-800 mb-5">Features</h3>
          <ul class="space-y-3 text-gray-600">
            <li>
              <a href="#" class="hover:text-purple-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-600">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-600">
                Benefit
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-600">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div class="col-span-2">
          <h3 class="text-lg font-semibold text-gray-800 mb-5 invisible">
            Hidden
          </h3>
          <ul class="space-y-3 text-gray-600">
            <li>
              <a href="#" class="hover:text-purple-600">
                Task Management
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-600">
                Company Growth
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-600">
                Time Tracking
              </a>
            </li>
          </ul>
        </div>

        <div class="col-span-2">
          <h3 class="text-lg font-semibold text-gray-800 mb-5">Support</h3>
          <ul class="space-y-3 text-gray-600">
            <li>
              <a href="#" class="hover:text-purple-600">
                Customer Service
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-600">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-purple-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </Flex>

      <div class="flex justify-between items-center mt-14 pt-6 border-t border-gray-300 text-sm text-gray-500">
        <p>©2021 Innovate.All Rights Reserved.</p>

        <div class="flex gap-8">
          <a href="#" class="hover:text-purple-600">
            Privacy Policy
          </a>
          <a href="#" class="hover:text-purple-600">
            Terms & Condition
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
