import React from 'react';
import { motion } from 'framer-motion';

const DesignPartner = () => {

  return (
    <section id="why-choose-us" style={{ padding: '8rem 5%', backgroundColor: '#050505', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Header Section */}
      <div style={{ textAlign: 'center', maxWidth: '900px', marginBottom: '5rem' }}>
        <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', marginBottom: '1.5rem', fontWeight: 600 }}>
          WHY CHOOSE US
        </div>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem', color: '#f5f5f5' }}>
          A UX design partner bringing process, precision, and creative thinking to your product
        </h2>
        <p style={{ color: '#888', fontSize: '1rem', marginBottom: '2.5rem' }}>
          Transparent pricing, senior talent, and strategy-focused approach.
        </p>
        <button style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.8rem 2rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, border: '1px solid #333' }}>
          Book a Call
        </button>
      </div>

      {/* Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto auto', gap: '1.5rem', width: '100%', maxWidth: '1200px' }}>
        
        {/* Block 1: Calendar (Left, tall, spans 2 rows) */}
        <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3', backgroundColor: '#1f1f1f', borderRadius: '24px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)' }}>
          {/* Background gradient simulating sand dunes */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, #7a5c40, transparent)', opacity: 0.3 }}></div>
          
          <div style={{ padding: '3rem 2.5rem', flex: 1, zIndex: 2 }}>
             {/* Glassmorphic Calendar UI */}
             <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.75rem', color: '#888', fontWeight: 600, letterSpacing: '0.05em' }}>
                  <span>NEXT CALLS</span>
                  <span>&lt; &gt;</span>
                </div>
                
                {/* Days Header */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center', fontSize: '0.75rem', color: '#ccc', marginBottom: '1rem' }}>
                  <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                </div>

                {/* Days Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#888' }}>
                  {/* Empty slots */}
                  <span></span><span></span><span></span>
                  <span>1</span><span>2</span><span>3</span><span>4</span>
                  <span>5</span><span>6</span><span>7</span><span>8</span>
                  
                  {/* Avatar slot */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#444' }}></div>
                  </div>
                  
                  <span>10</span><span>11</span><span>12</span><span>13</span>
                  
                  {/* Highlighted Live Day */}
                  <motion.div 
                    style={{ backgroundColor: '#fff', color: '#111', borderRadius: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    14
                  </motion.div>
                  
                  <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
                  
                  {/* Another Avatar slot */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#444' }}></div>
                  </div>
                  
                  <span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
                </div>

                {/* Bottom list inside calendar */}
                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                   <div style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>9:00 AM</div>
                   <div style={{ fontSize: '0.75rem', color: '#aaa' }}>Kickoff call with @Jaeho Park</div>
                   <div style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600, marginTop: '1rem' }}>10:00 AM</div>
                   <div style={{ fontSize: '0.75rem', color: '#aaa' }}>Brainstorm session</div>
                </div>
             </div>
          </div>

          <div style={{ padding: '0 2.5rem 2.5rem', zIndex: 2 }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#f5f5f5' }}>Weekly syncs</h4>
            <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.5 }}>
              Every week, we align on priorities, review progress, and keep strategy sharp.
            </p>
          </div>
        </div>

        {/* Block 2: Chat (Top Right, wide) */}
        <div style={{ gridColumn: '2 / 3', gridRow: '1 / 2', backgroundColor: '#1a1a1a', borderRadius: '24px', padding: '2.5rem', position: 'relative', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666', textAlign: 'center', marginBottom: '2rem', fontWeight: 600 }}>
            REAL-TIME COLLABORATION
          </div>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
            
            {/* Chat Bubble 1 */}
            <motion.div 
              style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{ repeat: Infinity, duration: 6, times: [0, 0.1, 0.9, 1] }}
            >
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#444' }}></div>
              <div style={{ backgroundColor: '#2a2a2a', padding: '0.75rem 1rem', borderRadius: '16px', borderTopLeftRadius: '4px', maxWidth: '80%' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff', display: 'block', marginBottom: '0.2rem' }}>Hey!</span>
                <span style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: 1.4 }}>We need a mobile app for clinicians. Very data-heavy.</span>
              </div>
            </motion.div>

            {/* Chat Bubble 2 (Right aligned) */}
            <motion.div 
              style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', alignSelf: 'flex-end', flexDirection: 'row-reverse' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{ repeat: Infinity, duration: 6, delay: 2, times: [0, 0.1, 0.9, 1] }}
            >
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ff3366' }}></div>
              <div style={{ backgroundColor: '#444', padding: '0.75rem 1rem', borderRadius: '16px', borderTopRightRadius: '4px', maxWidth: '80%' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff', display: 'block', marginBottom: '0.2rem', textAlign: 'right' }}>Hi Philip!</span>
                <span style={{ fontSize: '0.85rem', color: '#eee', lineHeight: 1.4 }}>We've worked in MedTech before. What's the compliance situation?</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Block 3: 3D Sphere (Bottom Right, wide) */}
        <div style={{ gridColumn: '2 / 3', gridRow: '2 / 3', backgroundColor: '#0a0a0a', borderRadius: '24px', padding: '2.5rem', position: 'relative', overflow: 'hidden', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Starfield background */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.5 }}></div>

          <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', zIndex: 10, maxWidth: '120px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#f5f5f5', lineHeight: 1.2 }}>60 International<br/>Design Awards</h4>
          </div>

          {/* True 3D CSS Ribbon Sphere Illusion */}
          <div style={{ perspective: '800px', width: '220px', height: '220px', position: 'relative', zIndex: 5 }}>
            <motion.div 
              style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
              animate={{ rotateX: [15, 375], rotateY: [0, 360] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              {/* Generate horizontal latitude bands */}
              {[-85, -60, -35, -10, 15, 40, 65, 90].map((y, i) => {
                 // Calculate radius at this height for a perfect sphere outline
                 const R = 110; // Half of 220px
                 const scale = Math.sqrt(R*R - y*y) / R;
                 return (
                   <div key={`band-${i}`} style={{
                     position: 'absolute',
                     inset: 0,
                     borderRadius: '50%',
                     border: '18px solid #c20000', // Deep intense red
                     transform: `translateY(${y}px) rotateX(90deg) scale(${scale})`,
                     boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8), 0 5px 15px rgba(0,0,0,0.5)',
                     background: 'transparent'
                   }}></div>
                 )
              })}
            </motion.div>
          </div>
          
        </div>

        {/* Block 4: Timeline (Full width bottom) */}
        <div style={{ gridColumn: '1 / 3', gridRow: '3 / 4', backgroundColor: '#1a1a1a', borderRadius: '24px', padding: '2.5rem', overflow: 'hidden' }}>
           
           {/* Top bar */}
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ fontWeight: 600, color: '#f5f5f5' }}>Timeline & Process</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <span style={{ fontSize: '0.75rem', color: '#888' }}>4 experts</span>
                 <div style={{ display: 'flex' }}>
                   {[1,2,3].map(i => <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#555', marginLeft: '-8px', border: '2px solid #1a1a1a' }}></div>)}
                 </div>
                 <div style={{ backgroundColor: '#2a2a2a', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', color: '#ccc' }}>Project time: 8 weeks</div>
              </div>
           </div>

           {/* Live Animated Gantt Chart */}
           <div style={{ position: 'relative', height: '180px' }}>
              {/* Grid Lines */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between' }}>
                 {[1,2,3,4,5,6,7,8,9,10,11].map(i => <div key={i} style={{ width: '1px', height: '100%', backgroundColor: 'rgba(255,255,255,0.05)', borderRight: '1px dashed rgba(255,255,255,0.1)' }}></div>)}
              </div>
              
              {/* Animated Progress Bars */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                 
                 {/* Discovery */}
                 <motion.div 
                    style={{ width: '25%', height: '24px', border: '1px solid #444', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', marginLeft: '5%' }}
                    animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 >
                   <span style={{ fontSize: '0.65rem', color: '#ccc' }}>Discovery →</span>
                   <span style={{ fontSize: '0.6rem', color: '#666' }}>01</span>
                 </motion.div>

                 {/* UX Design */}
                 <motion.div 
                    style={{ width: '20%', height: '24px', border: '1px solid #444', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', marginLeft: '25%' }}
                    animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 >
                   <span style={{ fontSize: '0.65rem', color: '#ccc' }}>UX Design →</span>
                   <span style={{ fontSize: '0.6rem', color: '#666' }}>02</span>
                 </motion.div>

                 {/* UI Design */}
                 <motion.div 
                    style={{ width: '35%', height: '24px', border: '1px solid #444', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', marginLeft: '35%' }}
                    animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 >
                   <span style={{ fontSize: '0.65rem', color: '#ccc' }}>UI Design →</span>
                   <span style={{ fontSize: '0.6rem', color: '#666' }}>03</span>
                 </motion.div>

                 {/* Animation */}
                 <motion.div 
                    style={{ width: '18%', height: '24px', border: '1px solid #444', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', marginLeft: '65%' }}
                    animate={{ x: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                 >
                   <span style={{ fontSize: '0.65rem', color: '#ccc' }}>Animation →</span>
                   <span style={{ fontSize: '0.6rem', color: '#666' }}>04</span>
                 </motion.div>

                 {/* Delivery */}
                 <motion.div 
                    style={{ width: '15%', height: '24px', border: '1px solid #444', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', marginLeft: '80%' }}
                    animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                 >
                   <span style={{ fontSize: '0.65rem', color: '#ccc' }}>Delivery →</span>
                   <span style={{ fontSize: '0.6rem', color: '#666' }}>05</span>
                 </motion.div>

              </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default DesignPartner;
