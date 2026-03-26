import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

target_pattern = r'    <!-- O Nosso Método Process Timeline -->\n    <section class="bg-gray-50 py-20 lg:py-32 border-t border-gray-100">.*?</section>'

replacement = """    <!-- O Nosso Método Process Timeline -->
    <section class="bg-gray-50 py-24 lg:py-40 border-t border-gray-100" x-data="{ activeStep: 1 }">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
            <div class="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                    <h2 class="text-4xl md:text-6xl font-black tracking-tighter text-brand-base uppercase relative inline-block">
                        O Nosso Método
                        <div class="absolute -bottom-4 md:-bottom-6 left-0 w-24 h-1.5 bg-brand-light"></div>
                    </h2>
                </div>
                <div class="max-w-md">
                    <p class="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-base/50 mb-2">Processo Tático</p>
                    <h3 class="text-base md:text-lg font-light text-brand-base/80">Um fluxo orgânico e de zero fricção para rápida integração das nossas soluções na sua estrutura empresarial.</h3>
                </div>
            </div>
            
            <div class="relative pt-4 md:pt-12">
                <!-- Continuous Line (Desktop) -->
                <div class="hidden md:block absolute top-[4.75rem] left-[12.5%] right-[12.5%] h-[2px] bg-brand-base/10 z-0">
                    <div class="absolute top-0 left-0 h-full bg-brand-light transition-all duration-700 ease-in-out" 
                         :style="'width: ' + ((activeStep - 1) * 33.333) + '%' "></div>
                </div>

                <!-- Continuous Line (Mobile) -->
                <div class="md:hidden absolute left-[27px] top-[4rem] bottom-[4rem] w-[2px] bg-brand-base/10 z-0">
                    <div class="absolute top-0 left-0 w-full bg-brand-light transition-all duration-700 ease-in-out" 
                         :style="'height: ' + ((activeStep - 1) * 33.333) + '%' "></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
                    
                    <!-- Step 1 -->
                    <div class="cursor-pointer group" @mouseenter="activeStep = 1" @click="activeStep = 1">
                        <div class="flex md:block items-start gap-6 md:gap-0">
                            <!-- Node -->
                            <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl md:mb-8 transition-all duration-500 border-[3px] shadow-sm relative z-10 mx-0 md:mx-auto"
                                 :class="activeStep >= 1 ? 'bg-brand-light text-white border-brand-light shadow-brand-light/30 shadow-lg scale-110' : 'bg-white border-brand-base/20 text-brand-base/40 group-hover:border-brand-light/50'">
                                1
                            </div>
                            <!-- Content -->
                            <div class="pt-2 md:pt-0 transition-all duration-500" :class="activeStep === 1 ? 'opacity-100 translate-y-0' : 'opacity-60 md:translate-y-2 group-hover:opacity-100'">
                                <h3 class="text-2xl font-bold mb-3 md:text-center transition-colors duration-300" :class="activeStep >= 1 ? 'text-brand-base' : 'text-brand-base/50'">Auditoria</h3>
                                <p class="text-brand-base/70 font-light leading-relaxed text-sm md:text-base md:text-center">Mapeamento meticuloso do jargão técnico da vossa indústria e avaliação profunda dos objetivos táticos da equipa.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="cursor-pointer group" @mouseenter="activeStep = 2" @click="activeStep = 2">
                        <div class="flex md:block items-start gap-6 md:gap-0">
                            <!-- Node -->
                            <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl md:mb-8 transition-all duration-500 border-[3px] shadow-sm relative z-10 mx-0 md:mx-auto"
                                 :class="activeStep >= 2 ? 'bg-brand-light text-white border-brand-light shadow-brand-light/30 shadow-lg scale-110' : 'bg-white border-brand-base/20 text-brand-base/40 group-hover:border-brand-light/50 group-hover:text-brand-light'">
                                2
                            </div>
                            <!-- Content -->
                            <div class="pt-2 md:pt-0 transition-all duration-500" :class="activeStep === 2 ? 'opacity-100 translate-y-0' : 'opacity-60 md:translate-y-2 group-hover:opacity-100'">
                                <h3 class="text-2xl font-bold mb-3 md:text-center transition-colors duration-300" :class="activeStep >= 2 ? 'text-brand-base' : 'text-brand-base/50'">Setup Corporativo</h3>
                                <p class="text-brand-base/70 font-light leading-relaxed text-sm md:text-base md:text-center">Desenho do currículo modular corporativo ou alocação do nosso linguista especializado na área técnica.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="cursor-pointer group" @mouseenter="activeStep = 3" @click="activeStep = 3">
                        <div class="flex md:block items-start gap-6 md:gap-0">
                            <!-- Node -->
                            <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl md:mb-8 transition-all duration-500 border-[3px] shadow-sm relative z-10 mx-0 md:mx-auto"
                                 :class="activeStep >= 3 ? 'bg-brand-light text-white border-brand-light shadow-brand-light/30 shadow-lg scale-110' : 'bg-white border-brand-base/20 text-brand-base/40 group-hover:border-brand-light/50 group-hover:text-brand-light'">
                                3
                            </div>
                            <!-- Content -->
                            <div class="pt-2 md:pt-0 transition-all duration-500" :class="activeStep === 3 ? 'opacity-100 translate-y-0' : 'opacity-60 md:translate-y-2 group-hover:opacity-100'">
                                <h3 class="text-2xl font-bold mb-3 md:text-center transition-colors duration-300" :class="activeStep >= 3 ? 'text-brand-base' : 'text-brand-base/50'">Execução Imersiva</h3>
                                <p class="text-brand-base/70 font-light leading-relaxed text-sm md:text-base md:text-center">Formação on-the-job de alto rendimento corporativo ou rigoroso processamento e revisão da tradução requerida.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="cursor-pointer group" @mouseenter="activeStep = 4" @click="activeStep = 4">
                        <div class="flex md:block items-start gap-6 md:gap-0">
                            <!-- Node -->
                            <div class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl md:mb-8 transition-all duration-500 border-[3px] shadow-sm relative z-10 mx-0 md:mx-auto"
                                 :class="activeStep >= 4 ? 'bg-brand-light text-white border-brand-light shadow-brand-light/30 shadow-lg scale-110' : 'bg-white border-brand-base/20 text-brand-base/40 group-hover:border-brand-light/50 group-hover:text-brand-light'">
                                4
                            </div>
                            <!-- Content -->
                            <div class="pt-2 md:pt-0 transition-all duration-500" :class="activeStep === 4 ? 'opacity-100 translate-y-0' : 'opacity-60 md:translate-y-2 group-hover:opacity-100'">
                                <h3 class="text-2xl font-bold mb-3 md:text-center transition-colors duration-300" :class="activeStep >= 4 ? 'text-brand-base' : 'text-brand-base/50'">Reporting</h3>
                                <p class="text-brand-base/70 font-light leading-relaxed text-sm md:text-base md:text-center">Avaliação contínua de progresso corporativo com envio pontual de dashboards analíticos aos gestores HR.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>"""

new_html, count = re.subn(target_pattern, replacement, html, flags=re.DOTALL)
if count > 0:
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(new_html)
    print("Successfully replaced.")
else:
    print("Pattern not found!")
