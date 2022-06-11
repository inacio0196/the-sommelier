import React from 'react'
import { MemoryRouter as Router, Routes as RoutesList, Route } from 'react-router-dom';

import { AppLayout } from 'renderer/components'

import Dashboard from 'renderer/pages/app/Dashboard';
import Notifications from 'renderer/pages/app/Notifications'
import Tasks from 'renderer/pages/app/Tasks';
import Company from 'renderer/pages/app/Company';
import StickyNotes from 'renderer/pages/app/StickyNotes';
import Notes from 'renderer/pages/app/Notes';
import Finance from 'renderer/pages/app/Finance';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <RoutesList>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/company" element={<Company />} />
          <Route path="/sticky-notes" element={<StickyNotes />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/finance" element={<Finance />} />
        </RoutesList>
      </AppLayout>
    </Router>
  )
}

export default AppRoutes 
