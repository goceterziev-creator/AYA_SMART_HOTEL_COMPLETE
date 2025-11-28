// 🚀 AYA PRODUCTION ECOSYSTEM - ПОПРАВЕН
class AYAEcosystem {
    constructor() {
        this.agents = new Map();
        this.systems = new Set();
        this.performance = {
            leads: 0,
            conversions: 0,
            revenue: 0
        };
        this.init();
    }
    
    init() {
        console.log('🎯 AYA Ecosystem - INITIALIZING');
        this.activateAllAgents();
        this.startRealTimeMonitoring();
        this.showEcosystemStatus();
        this.setupEventListeners();
    }
    
    activateAllAgents() {
        const agents = {
            'price_hunter': { status: 'ACTIVE', functions: 12 },
            'auto_negotiator': { status: 'ACTIVE', functions: 8 },
            'revenue_optimizer': { status: 'ACTIVE', functions: 15 },
            'guest_ai': { status: 'ACTIVE', functions: 20 },
            'channel_manager': { status: 'ACTIVE', functions: 10 }
        };
        
        Object.entries(agents).forEach(([name, config]) => {
            this.agents.set(name, config);
            console.log(`🤖 Активиран агент: ${name}`);
        });
    }
    
    startRealTimeMonitoring() {
        setInterval(() => {
            this.updateLiveMetrics();
        }, 3000);
    }
    
    updateLiveMetrics() {
        // Симулация на реал-тайм данни
        const metrics = {
            activeUsers: Math.floor(Math.random() * 100) + 50,
            revenueOptimized: Math.floor(Math.random() * 50000) + 25000
        };
    }
    
    setupEventListeners() {
        // Директен event listener за бутоните
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-primary')) {
                this.showDemoModal();
            }
            if (e.target.classList.contains('btn-secondary')) {
                this.showPricing();
            }
        });
    }
    
    showDemoModal() {
        const modalHTML = `
            <div id="demoModal" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            ">
                <div style="
                    background: white;
                    padding: 40px;
                    border-radius: 20px;
                    max-width: 500px;
                    width: 90%;
                    text-align: center;
                    position: relative;
                ">
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: none;
                        border: none;
                        font-size: 1.5em;
                        cursor: pointer;
                        color: #7f8c8d;
                    ">×</button>
                    
                    <h2 style="color: #2c3e50; margin-bottom: 20px;">🎯 Заявка за Безплатен Анализ</h2>
                    <p style="margin-bottom: 30px; color: #7f8c8d; line-height: 1.6;">
                        Нашият AI агент ще анализира вашия хотел и ще ви покаже точния потенциал за увеличаване на приходите.
                    </p>
                    
                    <div style="text-align: left;">
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #2c3e50;">Име на хотел</label>
                            <input type="text" style="width: 100%; padding: 12px; border: 2px solid #ecf0f1; border-radius: 10px;">
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #2c3e50;">Имейл</label>
                            <input type="email" style="width: 100%; padding: 12px; border: 2px solid #ecf0f1; border-radius: 10px;">
                        </div>
                    </div>
                    
                    <button onclick="this.closest('#demoModal').remove(); alert('🎉 Благодарим за заявката! Ще се свържем с вас скоро.')" style="
                        width: 100%;
                        background: #4ecdc4;
                        color: white;
                        border: none;
                        padding: 15px;
                        border-radius: 25px;
                        font-size: 1.1em;
                        cursor: pointer;
                        margin-top: 20px;
                    ">
                        🚀 Изпрати Заявка
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    showPricing() {
        const pricingHTML = `
            <div id="pricingModal" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            ">
                <div style="
                    background: white;
                    padding: 40px;
                    border-radius: 20px;
                    max-width: 600px;
                    width: 90%;
                    text-align: center;
                    position: relative;
                ">
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: none;
                        border: none;
                        font-size: 1.5em;
                        cursor: pointer;
                        color: #7f8c8d;
                    ">×</button>
                    
                    <h2 style="color: #2c3e50; margin-bottom: 30px;">💎 Цени и Пакети</h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr; gap: 20px; text-align: left;">
                        <div style="background: #ecf0f1; padding: 25px; border-radius: 15px;">
                            <h3 style="color: #2c3e50; margin-bottom: 15px;">🎯 BASIC - 99лв/месец</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 8px;">✓ AYA Price Hunter</li>
                                <li style="margin-bottom: 8px;">✓ Базова аналитика</li>
                                <li style="margin-bottom: 8px;">✓ До 50 резервации</li>
                            </ul>
                        </div>
                        
                        <div style="background: #4ecdc4; color: white; padding: 25px; border-radius: 15px;">
                            <h3 style="margin-bottom: 15px;">🚀 PRO - 299лв/месец</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 8px;">✓ Всички BASIC функции</li>
                                <li style="margin-bottom: 8px;">✓ Auto Negotiator</li>
                                <li style="margin-bottom: 8px;">✓ Напреднали аналитики</li>
                            </ul>
                        </div>
                    </div>
                    
                    <button onclick="this.closest('#pricingModal').remove(); alert('💼 Ще се свържем с вас за персонализирано предложение!')" style="
                        background: #4ecdc4;
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 25px;
                        font-size: 1.1em;
                        cursor: pointer;
                        margin-top: 30px;
                    ">
                        💬 Говори с Експерт
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', pricingHTML);
    }
    
    showEcosystemStatus() {
        const statusHTML = `
            <div style="
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: rgba(255,255,255,0.95);
                padding: 15px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 1000;
                font-family: Arial, sans-serif;
                border-left: 4px solid #4ecdc4;
            ">
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                    <div style="width: 8px; height: 8px; background: #27ae60; border-radius: 50%; margin-right: 8px;"></div>
                    <div style="font-weight: bold; color: #2c3e50;">AYA Ecosystem</div>
                </div>
                <div style="font-size: 0.8em; color: #7f8c8d;">
                    Агенти: ${this.agents.size}/5 | Статус: АКТИВЕН
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', statusHTML);
    }
}

// 🎯 СТАРТИРАНЕ НА СИСТЕМАТА ПРИ ЗАРЕЖДАНЕ
document.addEventListener('DOMContentLoaded', function() {
    window.ayaEcosystem = new AYAEcosystem();
    console.log('💫 AYA Smart Hotel - СИСТЕМАТА Е АКТИВИРАНА');
});

// 🔧 ДОПЪЛНИТЕЛНИ ФУНКЦИИ ЗА БУТОНИТЕ
function showDemoModal() {
    if (window.ayaEcosystem) {
        window.ayaEcosystem.showDemoModal();
    }
}

function showPricing() {
    if (window.ayaEcosystem) {
        window.ayaEcosystem.showPricing();
    }
}
