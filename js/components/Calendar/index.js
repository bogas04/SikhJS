import React, { Component } from 'react';

export default class Calendar extends Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <div className = "text-left">
        <h1> Nanakshahi Sikh Calendar System </h1>
        <h1> <small> Year begins from 1469 </small> </h1>

        <table className =  "table table-bordered">
          <thead>
            <tr> <th>Sikh Month</th> <th>Begining Data in Common Era</th> </tr>
          </thead>
          <tbody>
            <tr><td>Chet</td><td>March 14</td></tr>
            <tr><td>Vaisakh</td><td>May 15</td></tr>
            <tr><td>Jeth</td><td>May 15</td></tr>
            <tr><td>Harh</td><td>June 15</td></tr>
            <tr><td>Sawan</td><td>July 16</td></tr>
            <tr><td>Bahdon</td><td>August 16</td></tr>
            <tr><td>Asu</td><td>September 15</td></tr>
            <tr><td>Katakk</td><td>October 15</td></tr>
            <tr><td>Maghar</td><td>November 14</td></tr>
            <tr><td>Poh</td><td>December 14</td></tr>
            <tr><td>Magh</td><td>January 13</td></tr>
            <tr><td>Fagun</td><td>Feburary 12</td></tr>
          </tbody>
        </table>

        <h1> Events and Celebrations </h1>
        <h1> <small> Definition of Terms </small></h1>

        <dl className = "dl-horizontal text-left">
          <dt>Prakash</dt><dd>Birth</dd>
          <dt>Gurgadi</dt><dd>Ascension to Guruship</dd>
          <dt>Jotijot</dt><dd>Death</dd>
        </dl>

        <table className = "table table-bordered">
          <thead>
            <tr> <th>Common Era</th> <th>Nanak Shahi</th> <th>Event/Celebration</th> </tr>
          </thead>
          <tbody>
            <tr><td>Jan 05</td><td>23 Poh</td><td>Parkash Guru Gobind Singh</td></tr>
            <tr><td>Jan 31</td><td>19 Magh</td><td>Parkash Guru Har Rai</td></tr>
            <tr><td>Mar 14</td><td>1 Chet</td><td>Gurgadi Guru Har Rai</td></tr>
            <tr><td>Mar 14</td><td>1 Chet</td><td>New Years Day</td></tr>
            <tr><td>Mar 14</td><td>1 Chet</td><td>Hola Mohalla (2008)</td></tr>
            <tr><td>Mar 19</td><td>6 Chet</td><td>Jotijot Guru Hargobind</td></tr>
            <tr><td>Apr 14</td><td>1 Vaisakh</td><td>Parkash Guru Nanak (2008)</td></tr>
            <tr><td>Apr 14</td><td>1 Vaisakh</td><td>Vaisakhi - Creation of the Khalsa</td></tr>
            <tr><td>Apr 16</td><td>3 Vaisakh</td><td>Jotijot Guru Angad</td></tr>
            <tr><td>Apr 16</td><td>3 Vaisakh</td><td>Gurgadi Guru Amar Das</td></tr>
            <tr><td>Apr 16</td><td>3 Vaisakh</td><td>Jotijot Guru Harkrishan</td></tr>
            <tr><td>Apr 16</td><td>3 Vaisakh</td><td>Gurgadi Guru Tegh Bahadur</td></tr>
            <tr><td>Apr 18</td><td>5 Vaisakh</td><td>Parkash Guru Angad</td></tr>
            <tr><td>Apr 18</td><td>5 Vaisakh</td><td>Parkash Guru Tegh Bahadur</td></tr>
            <tr><td>May 02</td><td>19 Vaisakh</td><td>Parkash Guru Arjan</td></tr>
            <tr><td>May 23</td><td>9 Jeth</td><td>Parkash Guru Amar Das</td></tr>
            <tr><td>Jun 11</td><td>28 Jeth</td><td>Gurgadi Guru Hargobind</td></tr>
            <tr><td>Jun 16</td><td>2 Harh</td><td>Jotijot Guru Arjan</td></tr>
            <tr><td>Jul 05</td><td>21 Harh</td><td>Parkash Guru Hargobind</td></tr>
            <tr><td>Jul 23</td><td>8 Sawan</td><td>Parkash Guru Harkrishan</td></tr>
            <tr><td>Sep 01</td><td>17 Bhadon</td><td>First Installation of Adi Granth</td></tr>
            <tr><td>Sep 16</td><td>2 Asu</td><td>Jotijot Guru Amar Das</td></tr>
            <tr><td>Sep 16</td><td>2 Asu</td><td>Gurgadi Guru Ramdas</td></tr>
            <tr><td>Sep 16</td><td>2 Asu</td><td>Jotijot Guru Ramdas</td></tr>
            <tr><td>Sep 16</td><td>2 Asu</td><td>Gurgadi Guru Arjan</td></tr>
            <tr><td>Sep 18</td><td>4 Asu</td><td>Gurgadi Guru Angad</td></tr>
            <tr><td>Sep 22</td><td>8 Asu</td><td>Jotijot Guru Nanak</td></tr>
            <tr><td>Oct 09</td><td>25 Asu</td><td>Parkash Guru Ramdas</td></tr>
            <tr><td>Oct 20</td><td>6 Katik</td><td>Jotijot Guru Har Rai</td></tr>
            <tr><td>Oct 20</td><td>6 Katik</td><td>Gurgadi Guru Harkrishan</td></tr>
            <tr><td>Oct 20</td><td>6 Katik</td><td>Gurgadi Guru Granth Sahib</td></tr>
            <tr><td>Oct 21</td><td>7 Katik</td><td>Jotijot Guru Gobind Singh</td></tr>
            <tr><td>Oct 28</td><td>14 Katik</td><td>Bandi Chhor Divas (2008)</td></tr>
            <tr><td>Nov 24</td><td>11 Maghar</td><td>Gurgadi Guru Gobind Singh</td></tr>
            <tr><td>Nov 24</td><td>11 Maghar</td><td>Jotijot Guru Tegh Bahadur</td></tr>
            <tr><td>Dec 21</td><td>8 Poh</td><td>Martyrdom Guru Gobind Singh's Eldest two sons</td></tr>
            <tr><td>Dec 26</td><td>13 Poh</td><td>Martyrdom Guru Gobind Singh's Youngest two sons</td></tr>
          </tbody>
        </table>
        Thanks to <a href="http://sikhs.org">Sikhs.org</a> for above content.
      </div>
    );
  }
}
