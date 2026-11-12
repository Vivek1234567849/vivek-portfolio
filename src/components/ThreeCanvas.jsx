import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Laptop, Smartphone, Server, Sparkles, Compass } from 'lucide-react';

/**
 * Procedural Interactive 3D Cyber Developer Workstation
 * Replaces the abstract sphere/gola with an authentic Full-Stack 3D setup:
 * 1. Procedural 3D Laptop with illuminated code terminal display
 * 2. Procedural 3D Datacenter Server Rack with blinking status LEDs (Backend / Database)
 * 3. Procedural 3D Mobile Smartphone with responsive UI preview (Mobile)
 * 4. Holographic floating data connection beams & tech tokens
 * 5. Smooth mouse-tracking parallax & multi-angle controls
 */
export default function ThreeCanvas({ mousePosition, theme = 'dark' }) {
  const mountRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);
  const [activeView, setActiveView] = useState('isometric'); // 'isometric' | 'laptop' | 'server'
  const rotatingRef = useRef(isRotating);
  const themeRef = useRef(theme);
  const viewRef = useRef(activeView);

  useEffect(() => {
    rotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    viewRef.current = activeView;
  }, [activeView]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const isDark = themeRef.current === 'dark';
    scene.fog = new THREE.FogExp2(isDark ? 0x030712 : 0xf8fafc, 0.035);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 7.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.25 : 1.05;

    container.replaceChildren(renderer.domElement);

    // 3-Point Studio Lighting
    const ambientLight = new THREE.AmbientLight(isDark ? 0x0f172a : 0xe2e8f0, 2.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 4.2); // Electric cyan
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 3.5); // Deep violet
    rimLight.position.set(-6, 3, -4);
    scene.add(rimLight);

    const laptopGlowLight = new THREE.PointLight(0x38bdf8, 2.5, 6);
    laptopGlowLight.position.set(0, 0.8, 0.5);
    scene.add(laptopGlowLight);

    const serverGlowLight = new THREE.PointLight(0x10b981, 2.0, 5);
    serverGlowLight.position.set(2.4, 0.8, -0.4);
    scene.add(serverGlowLight);

    // Master Setup Group
    const workstationGroup = new THREE.Group();
    scene.add(workstationGroup);

    // Subtle Ground Pedestal / Shadow Grounding
    const pedestalGeo = new THREE.CylinderGeometry(3.8, 4.0, 0.15, 48);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0a101f : 0xe2e8f0,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: isDark ? 0.6 : 0.8
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.75;
    workstationGroup.add(pedestal);

    // Pedestal Neon Ring Accent
    const ringAccentGeo = new THREE.TorusGeometry(3.85, 0.02, 16, 64);
    const ringAccentMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 1.2,
      metalness: 0.9,
      roughness: 0.1
    });
    const ringAccent = new THREE.Mesh(ringAccentGeo, ringAccentMat);
    ringAccent.rotation.x = Math.PI / 2;
    ringAccent.position.y = -0.67;
    workstationGroup.add(ringAccent);

    // ==========================================
    // 1. PROCEDURAL 3D LAPTOP (Frontend Engine)
    // ==========================================
    const laptopGroup = new THREE.Group();
    workstationGroup.add(laptopGroup);
    laptopGroup.position.set(-0.3, -0.6, 0.2);

    // Laptop Base Chassis
    const baseGeo = new THREE.BoxGeometry(2.4, 0.08, 1.6);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1e293b : 0x475569,
      metalness: 0.85,
      roughness: 0.25
    });
    const baseMesh = new THREE.Mesh(baseGeo, chassisMat);
    baseMesh.position.y = 0.04;
    laptopGroup.add(baseMesh);

    // Keyboard Bed & Trackpad
    const keyboardGeo = new THREE.BoxGeometry(2.1, 0.015, 0.85);
    const keyboardMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0b1120 : 0x1e293b,
      metalness: 0.5,
      roughness: 0.7
    });
    const keyboardMesh = new THREE.Mesh(keyboardGeo, keyboardMat);
    keyboardMesh.position.set(0, 0.085, -0.2);
    laptopGroup.add(keyboardMesh);

    const trackpadGeo = new THREE.BoxGeometry(0.7, 0.01, 0.45);
    const trackpadMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x151f33 : 0x334155,
      metalness: 0.7,
      roughness: 0.3
    });
    const trackpadMesh = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpadMesh.position.set(0, 0.085, 0.45);
    laptopGroup.add(trackpadMesh);

    // Procedural Code Screen Texture via In-Memory Canvas
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 340;
    const ctx = screenCanvas.getContext('2d');
    if (ctx) {
      // Dark IDE Background
      ctx.fillStyle = '#070b14';
      ctx.fillRect(0, 0, 512, 340);

      // Top Tab Bar
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 512, 32);

      // Window dots
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(16, 16, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(32, 16, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(48, 16, 5, 0, Math.PI * 2);
      ctx.fill();

      // Tab Title
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('App.jsx · M. Vivek Full-Stack', 70, 20);

      // Code Lines
      ctx.font = '13px monospace';
      const lines = [
        { text: "import { React, useState } from 'react';", color: '#38bdf8' },
        { text: "import { AspNetCore, Laravel } from 'backend';", color: '#a855f7' },
        { text: '', color: '#94a3b8' },
        { text: '// Professional Full-Stack Architecture', color: '#64748b' },
        { text: 'const Developer = {', color: '#f1f5f9' },
        { text: "  name: 'M. Vivek',", color: '#38bdf8' },
        { text: "  title: 'Full-Stack Developer',", color: '#4ade80' },
        { text: "  skills: ['React', 'ASP.NET', 'Laravel', 'SQL'],", color: '#fbbf24' },
        { text: "  location: 'Karachi, Pakistan',", color: '#c084fc' },
        { text: "  education: 'Aptech Software Engineering',", color: '#38bdf8' },
        { text: '  deploy: () => console.log("System Online! 🚀")', color: '#4ade80' },
        { text: '};', color: '#f1f5f9' },
        { text: 'export default Developer;', color: '#f43f5e' }
      ];

      lines.forEach((line, index) => {
        ctx.fillStyle = line.color;
        ctx.fillText(line.text, 24, 60 + index * 20);
      });
    }

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.anisotropy = 4;

    // Laptop Screen Lid (Angled at ~110 degrees)
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.08, -0.8);
    screenGroup.rotation.x = Math.PI - 1.85; // angled open
    laptopGroup.add(screenGroup);

    const lidBezelGeo = new THREE.BoxGeometry(2.4, 1.55, 0.06);
    const lidBezelMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0f172a : 0x334155,
      metalness: 0.9,
      roughness: 0.2
    });
    const lidBezel = new THREE.Mesh(lidBezelGeo, lidBezelMat);
    lidBezel.position.y = 0.775;
    screenGroup.add(lidBezel);

    const displayGeo = new THREE.PlaneGeometry(2.26, 1.42);
    const displayMat = new THREE.MeshBasicMaterial({
      map: screenTexture
    });
    const displayMesh = new THREE.Mesh(displayGeo, displayMat);
    displayMesh.position.set(0, 0.775, 0.032);
    screenGroup.add(displayMesh);

    // ==========================================
    // 2. PROCEDURAL 3D SERVER RACK (Backend & DB)
    // ==========================================
    const serverTowerGroup = new THREE.Group();
    workstationGroup.add(serverTowerGroup);
    serverTowerGroup.position.set(1.9, -0.6, -0.2);

    // Server Stack: 3 Modular Blades
    const bladeGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.32, 32);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0f172a : 0x334155,
      metalness: 0.9,
      roughness: 0.2
    });

    const ledMatCyan = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 1.8
    });
    const ledMatGreen = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 2.0
    });

    for (let i = 0; i < 3; i++) {
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.y = i * 0.42 + 0.2;
      serverTowerGroup.add(blade);

      // Status Ring LED
      const ledRingGeo = new THREE.TorusGeometry(0.56, 0.015, 12, 32);
      const ledRing = new THREE.Mesh(ledRingGeo, i % 2 === 0 ? ledMatCyan : ledMatGreen);
      ledRing.rotation.x = Math.PI / 2;
      ledRing.position.y = i * 0.42 + 0.2;
      serverTowerGroup.add(ledRing);

      // Blinking front status dots
      const dotGeo = new THREE.SphereGeometry(0.025, 8, 8);
      const dotMesh1 = new THREE.Mesh(dotGeo, ledMatGreen);
      dotMesh1.position.set(-0.2, i * 0.42 + 0.2, 0.53);
      serverTowerGroup.add(dotMesh1);

      const dotMesh2 = new THREE.Mesh(dotGeo, ledMatCyan);
      dotMesh2.position.set(0.2, i * 0.42 + 0.2, 0.53);
      serverTowerGroup.add(dotMesh2);
    }

    // Server Label Disk
    const topCapGeo = new THREE.CylinderGeometry(0.45, 0.55, 0.08, 32);
    const topCapMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x1e293b : 0x475569,
      metalness: 0.95,
      roughness: 0.15
    });
    const topCap = new THREE.Mesh(topCapGeo, topCapMat);
    topCap.position.y = 3 * 0.42 + 0.05;
    serverTowerGroup.add(topCap);

    // ==========================================
    // 3. PROCEDURAL 3D SMARTPHONE (Responsive Design)
    // ==========================================
    const phoneGroup = new THREE.Group();
    workstationGroup.add(phoneGroup);
    phoneGroup.position.set(-1.9, -0.6, 0.6);
    phoneGroup.rotation.y = 0.35;
    phoneGroup.rotation.x = 0.1;

    // Phone Body
    const phoneGeo = new THREE.BoxGeometry(0.55, 0.04, 1.1);
    const phoneChassisMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x0f172a : 0x1e293b,
      metalness: 0.9,
      roughness: 0.2
    });
    const phoneMesh = new THREE.Mesh(phoneGeo, phoneChassisMat);
    phoneMesh.position.y = 0.02;
    phoneGroup.add(phoneMesh);

    // Phone Screen
    const phoneScreenGeo = new THREE.PlaneGeometry(0.48, 0.98);
    const phoneScreenMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.6,
      metalness: 0.5,
      roughness: 0.4
    });
    const phoneScreen = new THREE.Mesh(phoneScreenGeo, phoneScreenMat);
    phoneScreen.rotation.x = -Math.PI / 2;
    phoneScreen.position.set(0, 0.042, 0);
    phoneGroup.add(phoneScreen);

    // ==========================================
    // 4. DATA STREAMS & FLOATING TECH GLYPHS
    // ==========================================
    // Curved glowing data cable from laptop to server
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.9, 0.05, -0.4),
      new THREE.Vector3(1.3, 0.08, -0.6),
      new THREE.Vector3(1.7, 0.15, -0.3)
    ]);
    const cableGeo = new THREE.TubeGeometry(curve, 32, 0.02, 8, false);
    const cableMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 1.5,
      metalness: 0.8
    });
    const cableMesh = new THREE.Mesh(cableGeo, cableMat);
    laptopGroup.add(cableMesh);

    // Floating Holographic Tech Badges Orbiting Setup
    const badgeGroup = new THREE.Group();
    workstationGroup.add(badgeGroup);

    const createTechToken = (color, textLabel, posX, posY, posZ) => {
      const tokenCanvas = document.createElement('canvas');
      tokenCanvas.width = 128;
      tokenCanvas.height = 128;
      const tCtx = tokenCanvas.getContext('2d');
      if (tCtx) {
        tCtx.fillStyle = '#0f172a';
        tCtx.beginPath();
        tCtx.roundRect(8, 8, 112, 112, 24);
        tCtx.fill();

        tCtx.lineWidth = 4;
        tCtx.strokeStyle = color;
        tCtx.stroke();

        tCtx.fillStyle = '#ffffff';
        tCtx.font = 'bold 26px sans-serif';
        tCtx.textAlign = 'center';
        tCtx.textBaseline = 'middle';
        tCtx.fillText(textLabel, 64, 64);
      }
      const tokenTexture = new THREE.CanvasTexture(tokenCanvas);
      const tokenGeo = new THREE.PlaneGeometry(0.45, 0.45);
      const tokenMat = new THREE.MeshBasicMaterial({
        map: tokenTexture,
        transparent: true,
        side: THREE.DoubleSide
      });
      const tokenMesh = new THREE.Mesh(tokenGeo, tokenMat);
      tokenMesh.position.set(posX, posY, posZ);
      return tokenMesh;
    };

    const tokenReact = createTechToken('#38bdf8', 'React', -1.2, 1.4, -0.3);
    const tokenDotNet = createTechToken('#a855f7', '.NET', 0.2, 1.8, -1.2);
    const tokenSql = createTechToken('#10b981', 'SQL', 1.8, 1.3, 0.6);
    const tokenApi = createTechToken('#f59e0b', 'API', -1.6, 0.9, 1.2);

    badgeGroup.add(tokenReact);
    badgeGroup.add(tokenDotNet);
    badgeGroup.add(tokenSql);
    badgeGroup.add(tokenApi);

    // 5. Subtle Ambient Constellation Particles
    const particleCount = isSoftwareGl ? 60 : 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x38bdf8);
    const purpleColor = new THREE.Color(0xa855f7);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8.0;
      particlePositions[i * 3 + 1] = Math.random() * 4.0 - 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6.0;

      const mixed = Math.random() > 0.5 ? cyanColor : purpleColor;
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Tick
    let frameId = 0;
    let targetRotY = 0;
    let targetRotX = 0.25;
    let clock = new THREE.Clock();

    function tick() {
      const dt = clock.getDelta();
      const time = clock.getElapsedTime();

      // View presets adjustment
      let baseAngleY = 0;
      let baseAngleX = 0.25;

      if (viewRef.current === 'laptop') {
        baseAngleY = 0.35;
        baseAngleX = 0.35;
      } else if (viewRef.current === 'server') {
        baseAngleY = -0.55;
        baseAngleX = 0.2;
      }

      // Dynamic mouse tracking
      if (mousePosition) {
        targetRotY = baseAngleY + mousePosition.normalizedX * 0.35;
        targetRotX = baseAngleX - mousePosition.normalizedY * 0.2;
      }

      // Smooth damping interpolation
      workstationGroup.rotation.y = THREE.MathUtils.damp(workstationGroup.rotation.y, targetRotY, 4, dt);
      workstationGroup.rotation.x = THREE.MathUtils.damp(workstationGroup.rotation.x, targetRotX, 4, dt);

      // Auto subtle floating / spinning
      if (rotatingRef.current) {
        workstationGroup.position.y = Math.sin(time * 1.5) * 0.08;
      }

      // Floating tokens gentle oscillation
      tokenReact.position.y = 1.4 + Math.sin(time * 2.0) * 0.08;
      tokenDotNet.position.y = 1.8 + Math.cos(time * 2.2) * 0.08;
      tokenSql.position.y = 1.3 + Math.sin(time * 1.8 + 1) * 0.08;
      tokenApi.position.y = 0.9 + Math.cos(time * 2.4 + 2) * 0.08;

      // Make tokens always face camera
      tokenReact.quaternion.copy(camera.quaternion);
      tokenDotNet.quaternion.copy(camera.quaternion);
      tokenSql.quaternion.copy(camera.quaternion);
      tokenApi.quaternion.copy(camera.quaternion);

      // Server LEDs breathing
      ledMatCyan.emissiveIntensity = 1.5 + Math.sin(time * 4) * 0.5;
      ledMatGreen.emissiveIntensity = 1.8 + Math.cos(time * 3) * 0.4;
      laptopGlowLight.intensity = 2.2 + Math.sin(time * 3) * 0.4;

      // Particle rotation
      particles.rotation.y += dt * 0.02;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      baseGeo.dispose();
      chassisMat.dispose();
      keyboardGeo.dispose();
      keyboardMat.dispose();
      trackpadGeo.dispose();
      trackpadMat.dispose();
      lidBezelGeo.dispose();
      lidBezelMat.dispose();
      displayGeo.dispose();
      displayMat.dispose();
      screenTexture.dispose();
      bladeGeo.dispose();
      bladeMat.dispose();
      ledMatCyan.dispose();
      ledMatGreen.dispose();
      phoneGeo.dispose();
      phoneChassisMat.dispose();
      phoneScreenGeo.dispose();
      phoneScreenMat.dispose();
      cableGeo.dispose();
      cableMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      container.replaceChildren();
    };
  }, [theme]);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] flex items-center justify-center">
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        aria-label="Interactive 3D Full-Stack Developer Workstation"
      />

      {/* Sleek bottom control dock */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 dark:bg-slate-900/85 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 shadow-xl backdrop-blur-md z-10 transition-colors">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
            isRotating
              ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 font-medium'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          title="Toggle floating motion"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
          <span>{isRotating ? 'Floating' : 'Static'}</span>
        </button>

        <span className="text-slate-300 dark:text-slate-700">|</span>

        {/* View presets: Isometric / Laptop / Server */}
        <button
          onClick={() => setActiveView('isometric')}
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-[11px] transition-colors cursor-pointer ${
            activeView === 'isometric'
              ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 font-semibold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          title="Full-Stack Isometric View"
        >
          <Compass className="w-3 h-3" />
          <span>Full Stack</span>
        </button>

        <button
          onClick={() => setActiveView(activeView === 'laptop' ? 'isometric' : 'laptop')}
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-[11px] transition-colors cursor-pointer ${
            activeView === 'laptop'
              ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 font-semibold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          title="Focus Frontend Laptop"
        >
          <Laptop className="w-3 h-3" />
          <span>Frontend</span>
        </button>

        <button
          onClick={() => setActiveView(activeView === 'server' ? 'isometric' : 'server')}
          className={`flex items-center gap-1 px-2 py-1 rounded-full text-[11px] transition-colors cursor-pointer ${
            activeView === 'server'
              ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 font-semibold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          title="Focus Backend Server Stack"
        >
          <Server className="w-3 h-3" />
          <span>Backend</span>
        </button>
      </div>

      {/* Floating Animated Badges describing the full-stack setup */}
      <div className="hidden sm:block absolute top-6 left-4 px-3 py-1.5 rounded-lg bg-white/85 dark:bg-slate-900/85 border border-cyan-500/30 dark:border-cyan-500/20 backdrop-blur-md text-xs font-mono text-cyan-600 dark:text-cyan-300 pointer-events-none shadow-lg animate-float-slow">
        💻 Frontend · React & Code IDE
      </div>
      <div className="hidden sm:block absolute bottom-14 right-4 px-3 py-1.5 rounded-lg bg-white/85 dark:bg-slate-900/85 border border-emerald-500/30 dark:border-emerald-500/20 backdrop-blur-md text-xs font-mono text-emerald-600 dark:text-emerald-300 pointer-events-none shadow-lg animate-float-reverse">
        🗄️ Backend · ASP.NET, Server & DB
      </div>
    </div>
  );
}
