import { StreakCounter } from './components/StreakCounter';
import { MindmapChecklist } from './components/MindmapChecklist';
import { Timeline } from './components/Timeline';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EDE3] via-[#FAF5F0] to-[#F0E8DC] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-[#2B4336] mb-3">Morning Routine Widgets</h1>
          <p className="text-[#2B4336] opacity-60">노션을 위한 그래놀라 걸 스타일 위젯</p>
        </header>

        <div className="space-y-12">
          {/* First Row: Streak Counter */}
          <div className="flex justify-center">
            <StreakCounter />
          </div>

          {/* Second Row: Mindmap Checklist */}
          <div className="flex justify-center">
            <MindmapChecklist />
          </div>

          {/* Third Row: Timeline */}
          <div className="flex justify-center">
            <Timeline />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-[#2B4336] opacity-50">
          <p className="text-sm">각 위젯을 개별적으로 노션에 임베드할 수 있습니다</p>
        </footer>
      </div>
    </div>
  );
}
