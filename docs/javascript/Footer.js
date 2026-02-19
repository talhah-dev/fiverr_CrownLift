const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="bg-white border-t border-[#777C7C]/15">
  <div class="mx-auto max-w-7xl px-6 pt-14 pb-7 lg:px-10">
    <div class="grid gap-10 lg:grid-cols-12">
      <div class="lg:col-span-4">
        <a href="./index.html" class="inline-flex items-center gap-3">
          <span class="text-lg font-extrabold leading-tight text-[#111827]">CrownLift Concrete</span>
        </a>

        <p class="mt-4 text-sm leading-relaxed text-[#777C7C]">
          Premium mudjacking and concrete raising for safer sidewalks, smoother driveways, and cleaner finishes—without full replacement.
        </p>

        <div class="mt-6 space-y-2 text-sm">
          <p class="text-[#777C7C]">
            <span class="font-semibold text-[#111827]">Address:</span>
            4895 Biscayne Ave, Eagan, MN 55123
          </p>
          <p class="text-[#777C7C]">
            <span class="font-semibold text-[#111827]">Phone:</span>
            <a class="underline-offset-4 hover:underline text-[#111827]" href="tel:+16516883048">(651) 688-3048</a>
          </p>
          <p class="text-[#777C7C]">
            <span class="font-semibold text-[#111827]">Email:</span>
            <a class="underline-offset-4 hover:underline text-[#111827]" href="mailto:office@ableconcretemn.com">office@ableconcretemn.com</a>
          </p>
        </div>
      </div>

      <div class="lg:col-span-8">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p class="text-sm font-extrabold text-[#111827]">Pages</p>
            <ul class="mt-4 space-y-3 text-sm text-[#777C7C]">
              <li><a class="hover:text-[#111827] transition" href="./index.html">Home</a></li>
              <li><a class="hover:text-[#111827] transition" href="./about.html">About</a></li>
              <li><a class="hover:text-[#111827] transition" href="./mudjacking.html">Mud Jacking</a></li>
              <li><a class="hover:text-[#111827] transition" href="./faq.html">FAQ</a></li>
              <li><a class="hover:text-[#111827] transition" href="./contact.html">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-extrabold text-[#111827]">Services</p>
            <ul class="mt-4 space-y-3 text-sm text-[#777C7C]">
              <li><a class="hover:text-[#111827] transition" href="./mudjacking.html">Concrete Raising</a></li>
              <li><a class="hover:text-[#111827] transition" href="./mudjacking.html">Mudjacking</a></li>
              <li><a class="hover:text-[#111827] transition" href="./mudjacking.html">Trip Hazard Fix</a></li>
              <li><a class="hover:text-[#111827] transition" href="./mudjacking.html">Slab Leveling</a></li>
              <li><a class="hover:text-[#111827] transition" href="./contact.html">Request Estimate</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-extrabold text-[#111827]">Hours</p>
            <div class="mt-4 rounded-3xl border border-[#777C7C]/15 bg-white p-5">
              <div class="flex items-center justify-between text-sm">
                <span class="text-[#777C7C]">Mon–Fri</span>
                <span class="font-semibold text-[#111827]">8:00am – 4:00pm</span>
              </div>
              <div class="mt-2 flex items-center justify-between text-sm">
                <span class="text-[#777C7C]">Sat–Sun</span>
                <span class="font-semibold text-[#111827]">Closed</span>
              </div>
              <div class="mt-4">
                <a href="./contact.html"
                  class="inline-flex w-full items-center justify-center rounded-2xl bg-[#E6C17A] px-5 py-3 text-sm font-semibold text-[#111827] shadow-lg shadow-[#E6C17A]/20 transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#E6C17A]/60">
                  Request an Estimate
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 rounded-3xl border border-[#777C7C]/15 bg-white p-6">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm font-extrabold text-[#111827]">Serving Saint Paul, Minneapolis & nearby areas</p>
            <a href="tel:+16516883048" class="text-sm font-semibold text-[#111827] underline-offset-4 hover:underline">
              Call (651) 688-3048
            </a>
          </div>
          <p class="mt-2 text-sm text-[#777C7C]">
            Clean lifting. Minimal disruption. A premium finish you’ll notice.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-12 flex flex-col gap-3 border-t border-[#777C7C]/15 pt-6 text-centre items-center justify-center">
      <p class="text-xs text-[#777C7C]">
        © <span id="yearNow"></span> CrownLift Concrete. All rights reserved.
      </p>
    </div>
  </div>
</footer>

`;
