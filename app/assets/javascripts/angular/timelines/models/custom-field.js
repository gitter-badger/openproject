//-- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2014 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
//++

// ╭───────────────────────────────────────────────────────────────╮
// │  _____ _                _ _                                   │
// │ |_   _(_)_ __ ___   ___| (_)_ __   ___  ___                   │
// │   | | | | '_ ` _ \ / _ \ | | '_ \ / _ \/ __|                  │
// │   | | | | | | | | |  __/ | | | | |  __/\__ \                  │
// │   |_| |_|_| |_| |_|\___|_|_|_| |_|\___||___/                  │
// ├───────────────────────────────────────────────────────────────┤
// │ Javascript library that fetches and plots timelines for the   │
// │ OpenProject timelines module.                                 │
// ╰───────────────────────────────────────────────────────────────╯

// stricter than default
/*jshint undef:true,
         eqeqeq:true,
         forin:true,
         immed:true,
         latedef:true,
         trailing: true
*/

// looser than default
/*jshint eqnull:true */

// environment and other global vars
/*jshint browser:true, devel:true*/
/*global angular:false, Timeline:true*/

module.exports = function() {

  var CustomField = {
    identifier: 'custom_fields',
    all: function(timeline) {
      // collect all customfields
      var r = timeline.custom_fields;
      var result = [];
      for (var key in r) {
        if (r.hasOwnProperty(key)) {
          result.push(r[key]);
        }
      }
      return result;
    }
  };

  return CustomField;
}
