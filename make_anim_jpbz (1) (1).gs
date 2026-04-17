
'reinit'

'open jpbz_1_2018/flx.ctl'

'rgbset2'
tt=1
while tt <= 91

'c'
'set t 'tt
'q dim'
res=sublin(result,5)
time=subwrd(res,6)
'set grads off'
'set vpage 0 11 4 8.5'
'set grads off'
'set gxout shaded'
*'set lon -90 270'
'set lat -90 90'
'set gxout shaded'
'set clevs 0.001 0.002 0.005 0.01 0.02 0.05 0.1 0.2 0.5 1 2 5 10'
'd pwat1clm'
'draw title vapor amount from JP [kg/m2] \'time
'run cbarn 1 1 8.5 2.25'

*'page bottom'
'set vpage 0 11 0 4.5'
'set grads off'
'set gxout shaded'
*'set lon -90 270'
'set lat -90 90'
'set clevs 0.001 0.002 0.005 0.01 0.02 0.05 0.1 0.2 0.5 1 2 5 10'
'd pwat2clm'
'draw title vapor amount from BZ [kg/m2] \'time
'run cbarn 1 1 8.5 2.25'

if tt < 10 ; tt="0"tt ; endif
if tt < 100 ; tt="0"tt ; endif

'gxprint  anim/jpbz_20180101_'tt'.png white'

tt=tt+1

endwhile

'! convert -loop 0 -delay 15 anim/jpbz_20180101_\*.png anim/anim_jpbz_20180101.gif'

