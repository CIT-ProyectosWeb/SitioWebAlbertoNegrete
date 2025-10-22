import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 Necesario para *ngFor y directivas
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class Servicios implements AfterViewInit {
  @ViewChild('carrusel1') carrusel1!: ElementRef;
  @ViewChild('carrusel2') carrusel2!: ElementRef;
  @ViewChild('carrusel3') carrusel3!: ElementRef;

  carruseles: ElementRef[] = [];

  ngAfterViewInit(): void {
    this.carruseles = [this.carrusel1, this.carrusel2, this.carrusel3];
  }

  moverDerecha(index: number) {
    const carrusel = this.carruseles[index]?.nativeElement;
    if (carrusel) carrusel.scrollBy({ left: 350, behavior: 'smooth' });
  }

  moverIzquierda(index: number) {
    const carrusel = this.carruseles[index]?.nativeElement;
    if (carrusel) carrusel.scrollBy({ left: -350, behavior: 'smooth' });
  }

  /* ===================================================== */
  /* 🟧 CARRUSELES DE CAPACITACIONES (3 columnas) */
  /* ===================================================== */

  capacitaciones1 = [
    { titulo: 'Liderazgo Efectivo', imagen: 'https://picsum.photos/400/250?random=1', descripcion: 'Desarrolla habilidades para guiar equipos con confianza.' },
    { titulo: 'Comunicación Asertiva', imagen: 'https://picsum.photos/400/250?random=2', descripcion: 'Mejora tu habilidad para transmitir ideas con impacto.' },
    { titulo: 'Gestión del Tiempo', imagen: 'https://picsum.photos/400/250?random=3', descripcion: 'Optimiza tu productividad con técnicas profesionales.' },
    { titulo: 'Trabajo en Equipo', imagen: 'https://picsum.photos/400/250?random=4', descripcion: 'Aprende a fomentar la colaboración y el respeto.' },
    { titulo: 'Inteligencia Emocional', imagen: 'https://picsum.photos/400/250?random=5', descripcion: 'Fortalece tu empatía y resiliencia en el entorno laboral.' },
    { titulo: 'Negociación Estratégica', imagen: 'https://picsum.photos/400/250?random=6', descripcion: 'Domina el arte de la negociación efectiva.' },
    { titulo: 'Pensamiento Crítico', imagen: 'https://picsum.photos/400/250?random=7', descripcion: 'Desarrolla análisis y toma de decisiones sólidas.' },
    { titulo: 'Gestión de Conflictos', imagen: 'https://picsum.photos/400/250?random=8', descripcion: 'Aprende técnicas para resolver desacuerdos con éxito.' },
    { titulo: 'Innovación Empresarial', imagen: 'https://picsum.photos/400/250?random=9', descripcion: 'Inspira el cambio en tu empresa.' },
    { titulo: 'Motivación Personal', imagen: 'https://picsum.photos/400/250?random=10', descripcion: 'Despierta tu mejor versión.' }
  ];

  capacitaciones2 = [...this.capacitaciones1];
  capacitaciones3 = [...this.capacitaciones1];

  /* ===================================================== */
  /* 🎤 SECCIÓN DE CONFERENCIAS (49 imágenes) */
  /* ===================================================== */

  conferencias = [
    { titulo: 'Liderazgo Inspirador', descripcion: 'Cómo motivar equipos en tiempos de cambio', imagen: 'https://picsum.photos/400/400?random=1' },
    { titulo: 'Comunicación Asertiva', descripcion: 'El poder de hablar y escuchar efectivamente', imagen: 'https://picsum.photos/400/400?random=2' },
    { titulo: 'Gestión del Tiempo', descripcion: 'Productividad personal y profesional', imagen: 'https://picsum.photos/400/400?random=3' },
    { titulo: 'Inteligencia Emocional', descripcion: 'Desarrolla empatía y liderazgo consciente', imagen: 'https://picsum.photos/400/400?random=4' },
    { titulo: 'Innovación Empresarial', descripcion: 'Fomenta el cambio en tu organización', imagen: 'https://picsum.photos/400/400?random=5' },
    { titulo: 'Motivación Laboral', descripcion: 'Cómo mantener equipos felices y comprometidos', imagen: 'https://picsum.photos/400/400?random=6' },
    { titulo: 'Transformación Digital', descripcion: 'Adáptate a los nuevos modelos de negocio', imagen: 'https://picsum.photos/400/400?random=7' },
    { titulo: 'Gestión de Equipos', descripcion: 'Conecta talentos y lidera desde la empatía', imagen: 'https://picsum.photos/400/400?random=8' },
    { titulo: 'Ventas Estratégicas', descripcion: 'Cierra más acuerdos con visión y propósito', imagen: 'https://picsum.photos/400/400?random=9' },
    { titulo: 'Branding Personal', descripcion: 'Construye tu marca profesional y destaca', imagen: 'https://picsum.photos/400/400?random=10' },
    { titulo: 'Cultura Organizacional', descripcion: 'Construye equipos sólidos y con propósito', imagen: 'https://picsum.photos/400/400?random=11' },
    { titulo: 'Resolución de Conflictos', descripcion: 'Aprende a manejar desacuerdos de forma positiva', imagen: 'https://picsum.photos/400/400?random=12' },
    { titulo: 'Liderazgo Humanista', descripcion: 'Conecta con las personas antes que con los procesos', imagen: 'https://picsum.photos/400/400?random=13' },
    { titulo: 'Pensamiento Crítico', descripcion: 'Analiza, cuestiona y toma mejores decisiones', imagen: 'https://picsum.photos/400/400?random=14' },
    { titulo: 'Gestión del Estrés', descripcion: 'Controla la presión y mejora tu bienestar laboral', imagen: 'https://picsum.photos/400/400?random=15' },
    { titulo: 'Gestión de Proyectos', descripcion: 'Planifica y ejecuta estrategias exitosas', imagen: 'https://picsum.photos/400/400?random=16' },
    { titulo: 'Cambio y Adaptabilidad', descripcion: 'Aprende a evolucionar ante escenarios difíciles', imagen: 'https://picsum.photos/400/400?random=17' },
    { titulo: 'Negociación Avanzada', descripcion: 'Convierte conversaciones en acuerdos ganadores', imagen: 'https://picsum.photos/400/400?random=18' },
    { titulo: 'Coaching Ejecutivo', descripcion: 'Transforma tu liderazgo desde la autoconciencia', imagen: 'https://picsum.photos/400/400?random=19' },
    { titulo: 'Empoderamiento Personal', descripcion: 'Cree en ti y potencia tu capacidad de acción', imagen: 'https://picsum.photos/400/400?random=20' },
    { titulo: 'Toma de Decisiones', descripcion: 'Decide con confianza y claridad bajo presión', imagen: 'https://picsum.photos/400/400?random=21' },
    { titulo: 'Innovación Creativa', descripcion: 'Genera ideas que transforman realidades', imagen: 'https://picsum.photos/400/400?random=22' },
    { titulo: 'Productividad Inteligente', descripcion: 'Trabaja menos, logra más con estrategia', imagen: 'https://picsum.photos/400/400?random=23' },
    { titulo: 'Comunicación No Verbal', descripcion: 'Interpreta gestos y mejora tu conexión interpersonal', imagen: 'https://picsum.photos/400/400?random=24' },
    { titulo: 'Oratoria Profesional', descripcion: 'Habla con seguridad y cautiva a tu audiencia', imagen: 'https://picsum.photos/400/400?random=25' },
    { titulo: 'Trabajo Colaborativo', descripcion: 'Fortalece equipos y relaciones de confianza', imagen: 'https://picsum.photos/400/400?random=26' },
    { titulo: 'Gestión de Talento', descripcion: 'Identifica, motiva y retén al mejor personal', imagen: 'https://picsum.photos/400/400?random=27' },
    { titulo: 'Crecimiento Personal', descripcion: 'Tu mentalidad es la base de tu éxito', imagen: 'https://picsum.photos/400/400?random=28' },
    { titulo: 'Liderazgo Emocional', descripcion: 'Dirige con empatía y visión humana', imagen: 'https://picsum.photos/400/400?random=29' },
    { titulo: 'Finanzas Personales', descripcion: 'Toma el control de tu dinero con inteligencia emocional', imagen: 'https://picsum.photos/400/400?random=30' },
    { titulo: 'Gestión Empresarial', descripcion: 'Optimiza procesos y lidera organizaciones efectivas', imagen: 'https://picsum.photos/400/400?random=31' },
    { titulo: 'Cambio Organizacional', descripcion: 'Gestiona la transición de forma exitosa', imagen: 'https://picsum.photos/400/400?random=32' },
    { titulo: 'Cultura del Éxito', descripcion: 'Construye hábitos de alto rendimiento', imagen: 'https://picsum.photos/400/400?random=33' },
    { titulo: 'Liderazgo de Servicio', descripcion: 'Sirve a los demás para inspirar y crecer', imagen: 'https://picsum.photos/400/400?random=34' },
    { titulo: 'Trabajo Remoto Eficaz', descripcion: 'Conecta y lidera a distancia con resultados', imagen: 'https://picsum.photos/400/400?random=35' },
    { titulo: 'Mindfulness Laboral', descripcion: 'Aumenta tu concentración y bienestar', imagen: 'https://picsum.photos/400/400?random=36' },
    { titulo: 'Empatía Organizacional', descripcion: 'Transforma tus relaciones laborales', imagen: 'https://picsum.photos/400/400?random=37' },
    { titulo: 'Cambio de Mentalidad', descripcion: 'Rompe límites y potencia tu desarrollo', imagen: 'https://picsum.photos/400/400?random=38' },
    { titulo: 'Autoestima Profesional', descripcion: 'Refuerza tu valor y confianza interna', imagen: 'https://picsum.photos/400/400?random=39' },
    { titulo: 'Ética Laboral', descripcion: 'Construye credibilidad en tu entorno profesional', imagen: 'https://picsum.photos/400/400?random=40' },
    { titulo: 'Networking Estratégico', descripcion: 'Crea relaciones que impulsan tu crecimiento', imagen: 'https://picsum.photos/400/400?random=41' },
    { titulo: 'Motivación Empresarial', descripcion: 'Energiza a tus colaboradores y fomenta la acción', imagen: 'https://picsum.photos/400/400?random=42' },
    { titulo: 'Gestión de Emociones', descripcion: 'Aprende a mantener la calma bajo presión', imagen: 'https://picsum.photos/400/400?random=43' },
    { titulo: 'Innovación Continua', descripcion: 'Adáptate al cambio sin perder tu esencia', imagen: 'https://picsum.photos/400/400?random=44' },
    { titulo: 'Desarrollo Profesional', descripcion: 'Impulsa tu carrera hacia el siguiente nivel', imagen: 'https://picsum.photos/400/400?random=45' },
    { titulo: 'Liderazgo Juvenil', descripcion: 'Inspira a las nuevas generaciones a actuar con propósito', imagen: 'https://picsum.photos/400/400?random=46' },
    { titulo: 'Crecimiento Organizacional', descripcion: 'Alinea metas, personas y resultados', imagen: 'https://picsum.photos/400/400?random=47' },
    { titulo: 'Bienestar Integral', descripcion: 'Equilibrio entre mente, cuerpo y trabajo', imagen: 'https://picsum.photos/400/400?random=48' },
    { titulo: 'Innovación Educativa', descripcion: 'Nuevas formas de enseñar y aprender', imagen: 'https://picsum.photos/400/400?random=49' },
  ];
}
