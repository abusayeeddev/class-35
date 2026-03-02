import React from "react";
import Container from "../common/Container";
import Buttos from "../common/Buttos";
import { HiBadgeCheck } from "react-icons/hi";

function Contact() {
  return (
    <Container>
      <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h2>

          <form class="space-y-5">
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your number"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <Buttos className={`w-full flex items-center justify-center gap-2`} btntxt={`Submit`}>
                <HiBadgeCheck />
            </Buttos>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
