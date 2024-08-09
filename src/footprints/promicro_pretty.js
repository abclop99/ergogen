// Arduino ProMicro atmega32u4au
//  Take care to bridge the pads on the correct side of the pcb
//    To orient the MCU up, meaning power led faces away from pcb, bridge the pads on the side of the pcb with the MCU
//    To orient the MCU down, meaning power led faces the pcb, bridge the pads on the opposite side of the pcb

module.exports = {
  params: {
    class: 'MCU',
    RAW: {type: 'net', value: 'RAW'},
    GND: {type: 'net', value: 'GND'},
    RST: {type: 'net', value: 'RST'},
    VCC: {type: 'net', value: 'VCC'},
    F4: {type: 'net', value: 'F4'},
    F5: {type: 'net', value: 'F5'},
    F6: {type: 'net', value: 'F6'},
    F7: {type: 'net', value: 'F7'},
    B1: {type: 'net', value: 'B1'},
    B3: {type: 'net', value: 'B3'},
    B2: {type: 'net', value: 'B2'},
    B6: {type: 'net', value: 'B6'},

    D3: {type: 'net', value: 'D3'},
    D2: {type: 'net', value: 'D2'},
    D1: {type: 'net', value: 'D1'},
    D0: {type: 'net', value: 'D0'},
    D4: {type: 'net', value: 'D4'},
    C6: {type: 'net', value: 'C6'},
    D7: {type: 'net', value: 'D7'},
    E6: {type: 'net', value: 'E6'},
    B5: {type: 'net', value: 'B5'},
    B5: {type: 'net', value: 'B5'}
  },
  body: p => {
    return `
    (module ProMicro (layer F.Cu) (tedit 6135B927)
      ${p.at /* parametric position */}

    ${'' /* footprint description, tags and reference */}
    (descr "Solder-jumper reversible Pro Micro footprint")
    (tags "promicro ProMicro reversible solder jumper")
    (fp_text reference "${p.ref}" (at -16.256 -0.254 ${p.rot + 90}) (layer F.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )

    ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
    (fp_line (start -15.24 6.35) (end -12.7 6.35) (layer F.SilkS) (width 0.15))
    (fp_line (start -15.24 6.35) (end -15.24 8.89) (layer F.SilkS) (width 0.15))
    (fp_line (start -12.7 6.35) (end -12.7 8.89) (layer F.SilkS) (width 0.15))
    (fp_line (start -12.7 8.89) (end -15.24 8.89) (layer F.SilkS) (width 0.15))
    (fp_line (start -15.24 -6.35) (end -12.7 -6.35) (layer B.SilkS) (width 0.15))
    (fp_line (start -15.24 -6.35) (end -15.24 -8.89) (layer B.SilkS) (width 0.15))
    (fp_line (start -12.7 -6.35) (end -12.7 -8.89) (layer B.SilkS) (width 0.15))
    (fp_line (start -12.7 -8.89) (end -15.24 -8.89) (layer B.SilkS) (width 0.15))

    ${''/* illustration of the (possible) USB port overhang */}
    (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
    (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
    (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.15))
    (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer Dwgs.User) (width 0.15))

    (fp_circle (center 13.97 0.762) (end 14.095 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 13.97 0.762) (end 14.095 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 13.97 -0.762) (end 14.095 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 13.97 -0.762) (end 14.095 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 11.43 0.762) (end 11.555 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 11.43 0.762) (end 11.555 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 11.43 -0.762) (end 11.555 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 11.43 -0.762) (end 11.555 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 8.89 0.762) (end 9.015 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 8.89 0.762) (end 9.015 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 8.89 -0.762) (end 9.015 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 8.89 -0.762) (end 9.015 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 6.35 0.762) (end 6.475 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 6.35 0.762) (end 6.475 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 6.35 -0.762) (end 6.475 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 6.35 -0.762) (end 6.475 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 3.81 0.762) (end 3.935 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 3.81 0.762) (end 3.935 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 3.81 -0.762) (end 3.935 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 3.81 -0.762) (end 3.935 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 1.27 0.762) (end 1.395 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 1.27 0.762) (end 1.395 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center 1.27 -0.762) (end 1.395 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center 1.27 -0.762) (end 1.395 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -1.27 0.762) (end -1.145 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -1.27 0.762) (end -1.145 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -1.27 -0.762) (end -1.145 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -1.27 -0.762) (end -1.145 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -3.81 0.762) (end -3.685 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -3.81 0.762) (end -3.685 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -3.81 -0.762) (end -3.685 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -3.81 -0.762) (end -3.685 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -6.35 0.762) (end -6.225 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -6.35 0.762) (end -6.225 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -6.35 -0.762) (end -6.225 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -6.35 -0.762) (end -6.225 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -8.89 0.762) (end -8.765 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -8.89 0.762) (end -8.765 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -8.89 -0.762) (end -8.765 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -8.89 -0.762) (end -8.765 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -11.43 -0.762) (end -11.305 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -11.43 -0.762) (end -11.305 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -11.43 0.762) (end -11.305 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -11.43 0.762) (end -11.305 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -13.97 0.762) (end -13.845 0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -13.97 0.762) (end -13.845 0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -13.97 -0.762) (end -13.845 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -13.97 -0.762) (end -13.845 -0.762) (layer F.Mask) (width 0.25))
    (fp_poly (pts (xy 14.478 -5.08) (xy 13.462 -5.08) (xy 13.462 -6.096) (xy 14.478 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 11.938 -5.08) (xy 10.922 -5.08) (xy 10.922 -6.096) (xy 11.938 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 9.398 -5.08) (xy 8.382 -5.08) (xy 8.382 -6.096) (xy 9.398 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 6.858 -5.08) (xy 5.842 -5.08) (xy 5.842 -6.096) (xy 6.858 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 4.318 -5.08) (xy 3.302 -5.08) (xy 3.302 -6.096) (xy 4.318 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 1.778 -5.08) (xy 0.762 -5.08) (xy 0.762 -6.096) (xy 1.778 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -0.762 -5.08) (xy -1.778 -5.08) (xy -1.778 -6.096) (xy -0.762 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -3.302 -5.08) (xy -4.318 -5.08) (xy -4.318 -6.096) (xy -3.302 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -5.842 -5.08) (xy -6.858 -5.08) (xy -6.858 -6.096) (xy -5.842 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -8.382 -5.08) (xy -9.398 -5.08) (xy -9.398 -6.096) (xy -8.382 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -10.922 -5.08) (xy -11.938 -5.08) (xy -11.938 -6.096) (xy -10.922 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -13.462 -5.08) (xy -14.478 -5.08) (xy -14.478 -6.096) (xy -13.462 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 13.462 5.08) (xy 14.478 5.08) (xy 14.478 6.096) (xy 13.462 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 10.922 5.08) (xy 11.938 5.08) (xy 11.938 6.096) (xy 10.922 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 8.382 5.08) (xy 9.398 5.08) (xy 9.398 6.096) (xy 8.382 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 5.842 5.08) (xy 6.858 5.08) (xy 6.858 6.096) (xy 5.842 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 3.302 5.08) (xy 4.318 5.08) (xy 4.318 6.096) (xy 3.302 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy 0.762 5.08) (xy 1.778 5.08) (xy 1.778 6.096) (xy 0.762 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -1.778 5.08) (xy -0.762 5.08) (xy -0.762 6.096) (xy -1.778 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -4.318 5.08) (xy -3.302 5.08) (xy -3.302 6.096) (xy -4.318 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -6.858 5.08) (xy -5.842 5.08) (xy -5.842 6.096) (xy -6.858 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -9.398 5.08) (xy -8.382 5.08) (xy -8.382 6.096) (xy -9.398 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -11.938 5.08) (xy -10.922 5.08) (xy -10.922 6.096) (xy -11.938 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -14.478 5.08) (xy -13.462 5.08) (xy -13.462 6.096) (xy -14.478 6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -13.462 -5.08) (xy -14.478 -5.08) (xy -14.478 -6.096) (xy -13.462 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 1.778 -5.08) (xy 0.762 -5.08) (xy 0.762 -6.096) (xy 1.778 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -10.922 -5.08) (xy -11.938 -5.08) (xy -11.938 -6.096) (xy -10.922 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -8.382 -5.08) (xy -9.398 -5.08) (xy -9.398 -6.096) (xy -8.382 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -3.302 -5.08) (xy -4.318 -5.08) (xy -4.318 -6.096) (xy -3.302 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -0.762 -5.08) (xy -1.778 -5.08) (xy -1.778 -6.096) (xy -0.762 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 6.858 -5.08) (xy 5.842 -5.08) (xy 5.842 -6.096) (xy 6.858 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 11.938 -5.08) (xy 10.922 -5.08) (xy 10.922 -6.096) (xy 11.938 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -5.842 -5.08) (xy -6.858 -5.08) (xy -6.858 -6.096) (xy -5.842 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 4.318 -5.08) (xy 3.302 -5.08) (xy 3.302 -6.096) (xy 4.318 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 9.398 -5.08) (xy 8.382 -5.08) (xy 8.382 -6.096) (xy 9.398 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 14.478 -5.08) (xy 13.462 -5.08) (xy 13.462 -6.096) (xy 14.478 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 13.462 5.08) (xy 14.478 5.08) (xy 14.478 6.096) (xy 13.462 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 10.922 5.08) (xy 11.938 5.08) (xy 11.938 6.096) (xy 10.922 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 8.382 5.08) (xy 9.398 5.08) (xy 9.398 6.096) (xy 8.382 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 5.842 5.08) (xy 6.858 5.08) (xy 6.858 6.096) (xy 5.842 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 3.302 5.08) (xy 4.318 5.08) (xy 4.318 6.096) (xy 3.302 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy 0.762 5.08) (xy 1.778 5.08) (xy 1.778 6.096) (xy 0.762 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -1.778 5.08) (xy -0.762 5.08) (xy -0.762 6.096) (xy -1.778 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -4.318 5.08) (xy -3.302 5.08) (xy -3.302 6.096) (xy -4.318 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -6.858 5.08) (xy -5.842 5.08) (xy -5.842 6.096) (xy -6.858 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -9.398 5.08) (xy -8.382 5.08) (xy -8.382 6.096) (xy -9.398 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -11.938 5.08) (xy -10.922 5.08) (xy -10.922 6.096) (xy -11.938 6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -14.478 5.08) (xy -13.462 5.08) (xy -13.462 6.096) (xy -14.478 6.096)) (layer F.Mask) (width 0.1))
    (pad 2 smd custom (at -11.43 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) ${p.GND.str})
    (pad "" thru_hole circle (at -13.97 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask)
      (zone_connect 0))
    (pad "" thru_hole circle (at -11.43 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -8.89 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -6.35 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -3.81 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -1.27 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 1.27 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 3.81 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 6.35 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 8.89 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 11.43 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 13.97 7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 13.97 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 11.43 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 8.89 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 6.35 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 3.81 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at 1.27 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -1.27 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -3.81 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -6.35 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -8.89 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -11.43 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -13.97 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" smd custom (at -13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 24 smd custom (at -13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.D3.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" thru_hole rect (at -13.97 7.62 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers F.Cu F.Mask)
      (zone_connect 0))
    (pad "" thru_hole rect (at -13.97 -7.62 ${p.rot}) (size 1.6 1.6) (drill 1.1) (layers B.Cu B.Mask)
      (zone_connect 0))
    (pad "" smd custom (at -11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 23 smd custom (at -11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.D2.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 22 smd custom (at -8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 21 smd custom (at -6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -3.81 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -3.81 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 20 smd custom (at -3.81 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.D1.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -1.27 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -1.27 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 19 smd custom (at -1.27 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.D0.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 1.27 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 1.27 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 18 smd custom (at 1.27 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.D4.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 3.81 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 3.81 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 17 smd custom (at 3.81 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.C6.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 16 smd custom (at 6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.D7.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 15 smd custom (at 8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.E6.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 14 smd custom (at 11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.B5.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 13 smd custom (at 13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.B5.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad 1 smd custom (at -13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.RAW.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad 3 smd custom (at -8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.RST.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -8.89 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at -13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at -11.43 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad 2 smd custom (at -11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -13.97 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad 4 smd custom (at -6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.VCC.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at -6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 6 smd custom (at -1.27 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.F5.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad 7 smd custom (at 1.27 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.F6.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 13.97 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 1.27 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at 8.89 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad 8 smd custom (at 3.81 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.F7.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 1.27 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad 12 smd custom (at 13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.B6.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 3.81 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at 6.35 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at -3.81 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 3.81 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -1.27 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad 9 smd custom (at 6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.B1.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -6.35 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -3.81 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at -1.27 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at 6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 10 smd custom (at 8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.B3.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at 11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 11 smd custom (at 11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.B2.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 11.43 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad 5 smd custom (at -3.81 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.F4.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad 1 smd custom (at -13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.RAW.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad "" smd custom (at -11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 2 smd custom (at -11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 3 smd custom (at -8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.RST.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 4 smd custom (at -6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.VCC.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -3.81 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -3.81 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 5 smd custom (at -3.81 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.F4.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -1.27 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -1.27 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 6 smd custom (at -1.27 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.F5.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 1.27 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 1.27 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 7 smd custom (at 1.27 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.F6.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 3.81 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 3.81 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 8 smd custom (at 3.81 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.F7.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 9 smd custom (at 6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.B1.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 10 smd custom (at 8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.B3.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 11 smd custom (at 11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.B2.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 12 smd custom (at 13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.B6.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -13.97 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 24 smd custom (at -13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.D3.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad 23 smd custom (at -11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.D2.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -11.43 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 22 smd custom (at -8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -8.89 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 21 smd custom (at -6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -6.35 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 20 smd custom (at -3.81 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.D1.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -3.81 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -3.81 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 19 smd custom (at -1.27 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.D0.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at -1.27 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at -1.27 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 18 smd custom (at 1.27 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.D4.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 1.27 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 1.27 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 17 smd custom (at 3.81 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.C6.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 3.81 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 3.81 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 16 smd custom (at 6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.D7.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 6.35 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 15 smd custom (at 8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.E6.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 8.89 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 14 smd custom (at 11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.B5.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 11.43 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 13 smd custom (at 13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.B5.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
  ) (width 0))
      ))
    (pad "" smd custom (at 13.97 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
      ))
    (pad "" smd custom (at 13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives
        (gr_poly (pts
          (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
  ) (width 0))
      ))
    (pad 23 smd custom (at -11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.D2.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 23 smd custom (at -11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.D2.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 2 smd custom (at -11.43 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 2 thru_hole circle (at -11.43 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.GND.str})
    (pad 23 thru_hole circle (at -11.43 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.D2.str})
    (pad 24 thru_hole circle (at -13.97 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.D3.str})
    (pad 1 thru_hole circle (at -13.97 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.RAW.str})
    (pad 24 smd custom (at -13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.D3.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 1 smd custom (at -13.97 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.RAW.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 1 smd custom (at -13.97 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.RAW.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 24 smd custom (at -13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.D3.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 22 thru_hole circle (at -8.89 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.GND.str})
    (pad 3 thru_hole circle (at -8.89 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.RST.str})
    (pad 22 smd custom (at -8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 3 smd custom (at -8.89 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.RST.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 3 smd custom (at -8.89 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.RST.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 22 smd custom (at -8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 21 thru_hole circle (at -6.35 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.GND.str})
    (pad 4 thru_hole circle (at -6.35 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.VCC.str})
    (pad 21 smd custom (at -6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 4 smd custom (at -6.35 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.VCC.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 4 smd custom (at -6.35 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.VCC.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 21 smd custom (at -6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 20 thru_hole circle (at -3.81 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.D1.str})
    (pad 5 thru_hole circle (at -3.81 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.F4.str})
    (pad 20 smd custom (at -3.81 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.D1.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 5 smd custom (at -3.81 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.F4.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 5 smd custom (at -3.81 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.F4.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 20 smd custom (at -3.81 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.D1.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 19 thru_hole circle (at -1.27 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.D0.str})
    (pad 6 thru_hole circle (at -1.27 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.F5.str})
    (pad 19 smd custom (at -1.27 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.D0.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 6 smd custom (at -1.27 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.F5.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 6 smd custom (at -1.27 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.F5.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 19 smd custom (at -1.27 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.D0.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 18 thru_hole circle (at 1.27 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.D4.str})
    (pad 7 thru_hole circle (at 1.27 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.F6.str})
    (pad 18 smd custom (at 1.27 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.D4.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 7 smd custom (at 1.27 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.F6.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 7 smd custom (at 1.27 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.F6.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 18 smd custom (at 1.27 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.D4.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 17 thru_hole circle (at 3.81 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.C6.str})
    (pad 8 thru_hole circle (at 3.81 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.F7.str})
    (pad 17 smd custom (at 3.81 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.C6.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 8 smd custom (at 3.81 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.F7.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 8 smd custom (at 3.81 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.F7.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 17 smd custom (at 3.81 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.C6.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 16 thru_hole circle (at 6.35 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.D7.str})
    (pad 9 thru_hole circle (at 6.35 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.B1.str})
    (pad 16 smd custom (at 6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.D7.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 9 smd custom (at 6.35 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.B1.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 9 smd custom (at 6.35 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.B1.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 16 smd custom (at 6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.D7.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 15 thru_hole circle (at 8.89 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.E6.str})
    (pad 10 thru_hole circle (at 8.89 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.B3.str})
    (pad 15 smd custom (at 8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.E6.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 10 smd custom (at 8.89 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.B3.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 10 smd custom (at 8.89 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.B3.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 15 smd custom (at 8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.E6.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 14 thru_hole circle (at 11.43 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.B5.str})
    (pad 11 thru_hole circle (at 11.43 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.B2.str})
    (pad 14 smd custom (at 11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.B5.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 11 smd custom (at 11.43 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.B2.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 11 smd custom (at 11.43 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.B2.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 14 smd custom (at 11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.B5.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 13 thru_hole circle (at 13.97 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.B5.str})
    (pad 12 thru_hole circle (at 13.97 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.B6.str})
    (pad 13 smd custom (at 13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.B5.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 12 smd custom (at 13.97 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.B6.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 12 smd custom (at 13.97 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.B6.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 13 smd custom (at 13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.B5.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
  )
  `
  }
}

