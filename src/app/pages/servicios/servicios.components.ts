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

  carruseles: ElementRef[] = [];

  ngAfterViewInit(): void {
    this.carruseles = [this.carrusel1, this.carrusel2];
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
  /* CARRUSELES DE CAPACITACIONES (2 columnas) */
  /* ===================================================== */

  capacitaciones1 = [
    { titulo: 'Fortalecimiento del compromiso hacia la empresa', imagen: 'https://picsum.photos/400/250?random=1', descripcion: 'Estrategias para generar equipos más motivados, involucrados y orientados a resultados.' },
    { titulo: 'Planeación y gestión de la productividad', imagen: 'https://picsum.photos/400/250?random=2', descripcion: 'Aprende a planificar tareas y metas con enfoque SMART y resultados medibles.' },
    { titulo: 'Gestión del cambio', imagen: 'https://picsum.photos/400/250?random=3', descripcion: 'Aumenta la adaptabilidad y resiliencia organizacional ante nuevos desafíos.' },
    { titulo: 'Fortalecimiento de habilidades de liderazgo', imagen: 'https://picsum.photos/400/250?random=4', descripcion: 'Desarrolla competencias para dirigir, inspirar y guiar con empatía.' },
    { titulo: 'Fortalecimiento de habilidades para el manejo de personal', imagen: 'https://picsum.photos/400/250?random=5', descripcion: 'Mejora la comunicación, delegación y desarrollo de tus colaboradores.' },
    { titulo: 'Herramientas de coaching para un liderazgo eficiente', imagen: 'https://picsum.photos/400/250?random=6', descripcion: 'Aplica técnicas de coaching y PNL para potenciar a tu equipo.' },
    { titulo: 'Team Building', imagen: 'https://picsum.photos/400/250?random=7', descripcion: 'Ejercicios vivenciales para fortalecer la confianza, comunicación y cohesión en el equipo.' },
    { titulo: 'Comunicación productiva entre departamentos', imagen: 'https://picsum.photos/400/250?random=8', descripcion: 'Mejora la interacción interna y la sinergia organizacional.' },
    { titulo: 'Comunicación asertiva y efectiva', imagen: 'https://picsum.photos/400/250?random=9', descripcion: 'Aprende a escuchar, expresarte y negociar con empatía.' },
    ];

  capacitaciones2 = [
    { titulo: 'Relaciones humanas y empatía', imagen: 'https://picsum.photos/400/250?random=1', descripcion: 'Fomenta el respeto, la comprensión y el trabajo colaborativo..' },
    { titulo: 'Ventas exitosas', imagen: 'https://picsum.photos/400/250?random=2', descripcion: 'Estrategias prácticas para entender al cliente y cerrar acuerdos con éxito.' },
    { titulo: 'Servicio y atención de excelencia', imagen: 'https://picsum.photos/400/250?random=3', descripcion: 'Transforma la atención tradicional en experiencias memorables para el cliente.' },
    { titulo: 'Motivación y actitudes positivas en mi trabajo', imagen: 'https://picsum.photos/400/250?random=4', descripcion: 'Promueve la satisfacción laboral, compromiso y energía positiva.' },
    { titulo: 'Control y manejo del estrés', imagen: 'https://picsum.photos/400/250?random=5', descripcion: 'Aprende técnicas efectivas de relajación y equilibrio.' },
    { titulo: 'Inteligencia emocional aplicada al trabajo', imagen: 'https://picsum.photos/400/250?random=6', descripcion: 'Comprende y regula tus emociones para mejorar tu desempeño y relaciones laborales.' },
    { titulo: 'Manejo de conflictos', imagen: 'https://picsum.photos/400/250?random=7', descripcion: 'Aprende estrategias para resolver problemas de forma constructiva.' },
    ];

 /* ===================================================== */
/* 🎤 CONFERENCIAS — organizadas por categorías */
/* ===================================================== */

conferenciasPorCategoria = [
  {
    categoria: 'Desarrollo Personal',
    items: [
      { titulo: 'El maravilloso poder de decidir', descripcion: 'Aprende a tomar decisiones con serenidad y enfoque, construyendo tu propio destino con base en la reflexión y la autoconfianza.', imagen: 'https://picsum.photos/400/300?random=1' },
      { titulo: 'Darme cuenta: el camino a la autoconciencia', descripcion: 'Reflexiona sobre tus fortalezas, miedos y bendiciones para vivir con mayor plenitud y autenticidad.', imagen: 'https://picsum.photos/400/300?random=2' },
      { titulo: 'Propósito de vida', descripcion: 'Reconecta con el sentido y rumbo de tu existencia, alineando tus acciones con tu esencia.', imagen: 'https://picsum.photos/400/300?random=3' },
      { titulo: 'Cuando tú cambias lo que crees, tú cambias lo que haces', descripcion: 'Identifica y transforma tus creencias limitantes para alcanzar tu máximo potencial.', imagen: 'https://picsum.photos/400/300?random=4' },
      { titulo: 'Realmente… ¿me lo creo?', descripcion: 'Una charla sobre la autoconfianza y el poder de creer en ti mismo.', imagen: 'https://picsum.photos/400/300?random=5' }
    ]
  },
  {
    categoria: 'Motivación y Resiliencia',
    items: [
      { titulo: 'Automotivación para el éxito', descripcion: 'Descubre cómo mantener la inspiración interna para alcanzar tus metas personales y profesionales.', imagen: 'https://picsum.photos/400/300?random=6' },
      { titulo: '¡Aguanta vara, la vida sigue!', descripcion: 'Despierta tu capacidad de resiliencia y supera la adversidad con actitud positiva.', imagen: 'https://picsum.photos/400/300?random=7' },
      { titulo: 'Hazlo realidad', descripcion: 'Encuentra tus motivadores internos y conviértete en tu propio coach para lograr tus objetivos.', imagen: 'https://picsum.photos/400/300?random=8' },
      { titulo: 'Despierta el líder en ti', descripcion: 'Reencuentra tu liderazgo interior para influir positivamente en los demás desde la autenticidad.', imagen: 'https://picsum.photos/400/300?random=9' }
    ]
  },
  {
    categoria: 'Inteligencia Emocional y Bienestar',
    items: [
      { titulo: 'Competencias de la inteligencia emocional', descripcion: 'Aprende a reconocer, expresar y manejar tus emociones de forma constructiva.', imagen: 'https://picsum.photos/400/300?random=10' },
      { titulo: 'Mindfulness: atención plena para una vida saludable', descripcion: 'Técnicas para vivir el presente, reducir el estrés y aumentar la concentración.', imagen: 'https://picsum.photos/400/300?random=11' },
      { titulo: 'Control y manejo del estrés', descripcion: 'Conoce herramientas para equilibrar tus emociones y tu desempeño.', imagen: 'https://picsum.photos/400/300?random=12' },
      { titulo: 'Conectando con mis emociones', descripcion: 'Desarrolla conciencia emocional y fortalece tus relaciones humanas.', imagen: 'https://picsum.photos/400/300?random=13' },
      { titulo: 'Más amor, menos violencia', descripcion: 'Promueve relaciones armoniosas y respetuosas desde la empatía y el amor.', imagen: 'https://picsum.photos/400/300?random=14' }
    ]
  },
  {
    categoria: 'Familia, Relaciones y Servicio',
    items: [
      { titulo: 'La familia: el mejor equipo', descripcion: 'Reconoce la importancia de la unidad y colaboración en el núcleo familiar.', imagen: 'https://picsum.photos/400/300?random=15' },
      { titulo: 'Comprometido ¿yo?', descripcion: 'Reflexiona sobre tu papel y responsabilidad en los distintos ámbitos de tu vida.', imagen: 'https://picsum.photos/400/300?random=16' },
      { titulo: '¿Cómo servir más y mejor?', descripcion: 'Aprende a conectar con el propósito del servicio consciente.', imagen: 'https://picsum.photos/400/300?random=17' },
      { titulo: 'Lenguaje responsable', descripcion: 'Descubre el impacto de tus palabras y cómo usarlas a tu favor.', imagen: 'https://picsum.photos/400/300?random=18' },
      { titulo: '¿No tengo pelos en la lengua? Comunicación asertiva y eficiente', descripcion: 'Mejora tus relaciones aprendiendo a comunicarte con respeto y claridad.', imagen: 'https://picsum.photos/400/300?random=19' }
    ]
  },
  {
    categoria: 'Crecimiento Profesional y Liderazgo',
    items: [
      { titulo: 'Actitudes positivas', descripcion: 'Cambia tu perspectiva y enfoca tu energía en soluciones y crecimiento.', imagen: 'https://picsum.photos/400/300?random=20' },
      { titulo: 'Ponte la camiseta (y de pasada, súdala)', descripcion: 'Despierta el sentido de pertenencia y compromiso en tu entorno laboral.', imagen: 'https://picsum.photos/400/300?random=21' },
      { titulo: 'Juntos logramos más', descripcion: 'Fomenta la colaboración, empatía y comunicación en los equipos de trabajo.', imagen: 'https://picsum.photos/400/300?random=22' },
      { titulo: 'Vida y trabajo en equilibrio', descripcion: 'Encuentra la armonía entre tus dimensiones personal, social y laboral.', imagen: 'https://picsum.photos/400/300?random=23' },
      { titulo: 'Finanzas inteligentes', descripcion: 'Aprende a tener una relación positiva con el dinero y la gestión de tus recursos.', imagen: 'https://picsum.photos/400/300?random=24' }
    ]
  }
];
}
